class ReviewsController < ApplicationController
    
    def create
        review = Review.create(review_params)

        if review.save
            app_response(message: "Review successfully created", status: :created, data: review)
        else
            app_response(message: "Review failed" , status: :unprocessable_entity, data: review.errors) 
        end
    end

    def update

    end
    
     private
    
    def review_params
       params.permit(:rating, :comment, :user_id, :home_detail_id)
    end
  

end
