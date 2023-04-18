class ReviewsController < ApplicationController
    
    def create
        review = Review.create(review_params)

        if review.save
            app_response(message: "Review successfully created" status: :created)
        else
            app_response(message: "Review failed" status: :unprocessable_entity)
        end
    end

    def update

    end
    
     private
    
    def review_params
       params.permit(:rating, :comment, :user_id, :home_details_id)
    end
  

end
