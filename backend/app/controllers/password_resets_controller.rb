
class PasswordResetsController < ApplicationController
  
    def reset_password
      user = User.find_by(username: params[:username])
      if user.nil?
        render json: { message: 'User not found' }, status: :not_found
      else
        user.update(password: params[:password])
        render json: user, status: :created
      end
    end
  end