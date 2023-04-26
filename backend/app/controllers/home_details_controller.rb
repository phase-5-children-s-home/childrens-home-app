class HomeDetailsController < ApplicationController
   
      before_action :current_user, only: [:create, :update, :destroy]

  # before_action :set_user, only: [:create, :update, :destroy]


    def index
        home = HomeDetail.all
        render json: home
    end

    def create
       
        if current_user.admin?
        home = HomeDetail.create(home_params)
        if home.save

          app_response(message: "created successfully", status: :created, data: home)
        else
          app_response(message: "failed to create", status: :unprocessable_entity, data: home.errors)
        end
      else
        app_response(message: "You dont ave acces rihts to perform this action", status: :unauthorized)
      end

    end   

    def search
      if params[:name].present?
        homes = HomeDetail.where("name LIKE ?", "%#{params[:name]}%")
      elsif params[:location].present?
        homes = HomeDetail.where("location LIKE ?", "%#{params[:location]}%")
      else
        app_response(message: "could not find children's homes based on the details entered")
        return
      end
    
      if homes.present?
        render json: homes
      else
        app_response(message: "could not find children's homes based on the details entered")
      end
  end
      
    def update
      if current_user.admin?
        home = HomeDetail.find(params[:id])      
        if home.update(home_params)
          app_response(message: "updated successfully", data: home)
        else
          app_response(message: "failed to update", status: :unprocessable_entity)
        end
      else
        app_response(message: "You dont ave acces rihts to perform this action", status: :unauthorized)
      end
    end
     
    def destroy
         
      if current_user.admin?
        home = HomeDetail.find(params[:id])
        if home.destroy
            app_response(message: "deleted successfully")
        else
            app_response(message: "failed to delete")
        end
      else
        app_response(message: "You dont have acces rights to perform this action", status: :unauthorized)
      end
    end
     
     private 
 
     def home_params
       params.require(:home_detail).permit(:name, :description, :image_url, :address, :phone_number, :email, :location)
    end
    

 end
 
