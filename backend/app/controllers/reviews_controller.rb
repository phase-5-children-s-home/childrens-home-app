class ReviewsController < ApplicationController
    
    def create
        review = Review.create(review_params)

        if review.save
            app_response(message: "Review successfully created", status: :created, data: review)
        else
            app_response(message: "Review failed" , status: :unprocessable_entity, data: review.errors) 
        end
    end

    def index
        
       review = Review.all
       render json: review

    end

    def update
        review = Review.find_by(id: params[:id])

        if review.update(review_params) 
            app_response(message: "Updated review successfully", status: :created,data: review)
        else
            app_response(message: "couldn't update review successfully", status: :unprocessable_entity, data: review.errors)
        end
    end

    def destroy
        review = Review.find(params[:id])
        if review.destroy
            app_response(message: "Deleted reviewsuccessfully")
        else
            app_response(messae: "failed to delete")
        end
    end
      
     private
    
    def review_params
       params.permit(:rating, :comment, :user_id, :home_detail_id)
    end
  

end
