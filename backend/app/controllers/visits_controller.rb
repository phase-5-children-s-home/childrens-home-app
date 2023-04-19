class VisitsController < ApplicationController
  def create
    home_detail = HomeDetail.find_by(id: params[:home_detail_id])
    # if home_detail.nil?
    #   app_response(message: "Home detail not found", status: :not_found)
       
    # end

    # render json: home_detail
  # end

     
    visit_date = params[:visit_date]

    if home_detail.book_visit(visit_date)
      book_visit = Visit.create(user: current_user, home_detail: home_detail, visit_date: visit_date, status: "Pending")
      if book_visit.save
        app_response(message: "booking created", status: :created, data: book_visit)
      else
        app_response(message: "date couldn't be booked", status: :unprocessable_entity, data: booking.errors)
      end
    else
      app_response(message: "booking date not available")
    end
  end
 end

