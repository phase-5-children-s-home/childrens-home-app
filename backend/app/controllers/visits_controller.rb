class VisitsController < ApplicationController

    def create
        visit = Visit.create(visit_params)
        if visit.save
          app_response(message: "visit successfully booked" status: :created, data: visit)
        else
          app_response(message: visit.errors.full_messages status: :unprocessable_entity)
        end
      end
    
      private
    
      def visit_params
        params.permit(:date, :home_details_id, :user_id)
    end

end
