class ReviewsController < ApplicationController
    
    def create
        review = Review.create(review_params)

        if review.save
            app_response(message: "Review successfully created" status: :created)
        else
            app_response(message: "Review failed" status: :unprocessable_entity)
        end
    end
    
        private
    
    def review_params
       params.permit(:rating, :comment)
    end
  

end
