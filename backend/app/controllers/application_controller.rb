# class ApplicationController < ActionController::API
     
#     include Pundit::Authorization

#      rescue_from StandardError, with: :standard_error

#     before_action :set_access_control_headers

#    def set_access_control_headers
#     headers['Access-Control-Allow-Origin'] = '*'
#     headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
#     headers['Access-Control-Allow-Headers'] = 'Content-Type'
#   end

#     def app_response(message: 'success', status: 200, data: nil)
#         render json: {
#             message: message,
#             data: data
#         }, status: status
#     end

#     # hash data into web token
#     def encode(uid, email)
#         payload = {
#             data: {
#                 uid: uid,
#                 email: email,
#                 role: 'admin'
#             },
#             exp: Time.now.to_i + (6 * 3600)
#         }
#         begin
#             JWT.encode(payload, ENV['task_train_key'], 'HS256')
#         rescue JWT::EncodeError => e
#             app_response(message: 'failed', status: 400, data: { info: 'Something went wrong. Please try again' })
#         end
#     end

#     # unhash the token
#     def decode(token)
#         begin
#             JWT.decode(token, ENV['task_train_key'], true, { algorithm: 'HS256' })
#         rescue JWT::DecodeError => e
#             app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' }) 
#         end
#     end

#     # verify authorization headers
#     def verify_auth
#         auth_headers = request.headers['Authorization']
#         if !auth_headers
#             app_response(message: 'failed', status: 401, data: { info: 'Your request is not authorized.' }) 
#         else
#             token = auth_headers.split(' ')[1]
#             save_user_id(token)
#         end
#     end

#     # store user id in session
#     def save_user(id)
#         session[:uid] = id
#         session[:expiry] = 6.hours.from_now
#     end

#     # delete user id in session
#     def remove_user
#         session.delete(:uid)
#         session[:expiry] = Time.now
#     end

#     # check for session expiry
#     def session_expired?
#         session[:expiry] ||= Time.now
#         time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
#         unless time_diff > 0
#             app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
#         end
#     end

#     # get logged in user
#     def user
#         User.find(@uid) 
#     end

#     # save user's id
#     def save_user_id(token)
#         @uid = decode(token)[0]["data"]["uid"].to_i
#     end

#     # get logged in user (session)
#     def user_session 
#         User.find(session[:uid].to_i) 
#     end

#     # rescue all common errors
#     def standard_error(exception)
#         app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
#     end

# end


class ApplicationController < ActionController::API
    include Pundit
    rescue_from StandardError, with: :standard_error
  
    def app_response(message: 'success', status: 200, data: nil)
      render json: {
        message: message,
        data: data
      }, status: status
    end
  
    def encode_token(payload)
      # should store secret in env variable
      JWT.encode(payload, 'my_s3cr3t')
    end
  
    def auth_header
      # { Authorization: 'Bearer <token>' }
      request.headers['Authorization']
    end
  
    def decoded_token
      if auth_header
        token = auth_header.split(' ')[1]
        # header: { 'Authorization': 'Bearer <token>' }
        begin
          JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
        rescue JWT::DecodeError
          nil
        end
      end
    end
  
    def current_user
      if decoded_token
        user_id = decoded_token[0]['user_id']
        @user = User.find_by(id: user_id)
      end
    end
  
    def logged_in?
      !!current_user
    end
  
    def save_user(id)
      session[:uid] = id
      session[:expiry] = 6.hours.from_now
    end
  
    def remove_user
      session.delete(:uid)
      session[:expiry] = Time.now
    end
  
    def session_expired?
      session[:expiry] ||= Time.now
      time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
      unless time_diff > 0
        return app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
      end
    end
  
    def user
      User.find(@uid)
    end
  
    def save_user_id(token)
      @uid = JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')[0]['data']['uid'].to_i
    end
  
    def user_session
      User.find(session[:uid].to_i)
    end
  
    def standard_error(exception)
      app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
    end
  end
  