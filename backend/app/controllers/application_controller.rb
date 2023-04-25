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
  