class HomeDetailsController < ApplicationController
   
    def index
        home = HomeDetail.all
        render json: home
    end

    def create
       home = HomeDetail.create(home_params)
       if home.save 
           app_response(message: "created successfully", status: :created, data: home)
       else
           app_response(message: "failed to create", status: :unprocessable_entity, data: home.errors)
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
        home = HomeDetail.find(params[:id])
      
        if home.update(home_params)
          app_response(message: "updated successfully", data: home)
        else
          app_response(message: "failed to update", status: :unprocessable_entity)
        end
    end
     
    def destroy

        home = HomeDetail.find(params[:id])

        if home.destroy
            app_response(message: "deleted successfully")
        else
            app_response(message: "failed to delete")
        end
    end
     
     private 
 
     def home_params
         params.permit(:name, :description, :location, :image_url, :adress, :phone_number, :email)
     end
 end
 
