class VisitsController < ApplicationController
  def create
    home_detail = HomeDetail.find_by(id: params[:home_detail_id])
    
    visit_date = params[:visit_date]
    
    if home_detail.book_visit(visit_date)
      visit = Visit.new(visit_params)
      if visit.save  
        app_response(message: "booking created", status: :created, data: visit)
      else
        app_response(message: "visit couldn't be booked", status: :unprocessable_entity, data: visit.errors)
      end
    else
      app_response(message: "booking date not available")
    end
  end

  private

  def visit_params
    params.permit(:user_id, :home_detail_id, :visit_date)
  end
end


