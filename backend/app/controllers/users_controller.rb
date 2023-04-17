class UsersController < ApplicationController
<<<<<<< HEAD
=======
    before_action :session_expired?, only: [:check_login_status]

    before_action :session_expired?, only: [:check_login_status]

    def register
        user = User.create(user_params)
        if user.valid?
            save_user(user.id)
            app_response(message: 'Registration was successful', status: :created, data: user)
        else
            app_response(message: 'Something went wrong during registration', status: :unprocessable_entity, data: user.errors)
        end
    end

    def login
        sql = "username = :username OR email = :email"
        user = User.where(sql, { username: user_params[:username], email: user_params[:email] }).first
        if user&.authenticate(user_params[:password])
            save_user(user.id)
            token = encode(user.id, user.email)
            app_response(message: 'Login was successful', status: :ok, data: {user: user, token: token})
        else
            app_response(message: 'Invalid username/email or password', status: :unauthorized)
        end
    end

    def logout
        remove_user
        app_response(message: 'Logout successful')
    end

    def check_login_status
        app_response(message: 'success', status: :ok)
    end

    # def forgot_password
    #     user = User.find_by(email: params[:email])
    #     if user
    #       token = SecureRandom.hex(20)
    #       user.update(reset_password_token: token, reset_password_sent_at: Time.now)
    #       UserMailer.reset_password_email(user, token).deliver_now
    #       render json: { message: "Password reset instructions sent to #{params[:email]}" }
    #     else
    #       render json: { message: "Email address not found" }, status: :unprocessable_entity
    #     end
    #   end
    
    #   def reset_password
    #     user = User.find_by(reset_password_token: params[:token])
    #     if user && user.reset_password_sent_at > 2.hours.ago
    #       user.update(password: params[:password], reset_password_token: nil, reset_password_sent_at: nil)
    #       render json: { message: "Password successfully reset" }
    #     elsif user.nil?
    #       render json: { message: "Invalid token" }, status: :unprocessable_entity
    #     else
    #       render json: { message: "Token expired" }, status: :unprocessable_entity
    #     end
    #   end
      

    private 
    
    def user_params
        params.permit(:firstname, :lastname, :username, :email, :password)
    end

>>>>>>> main
end
