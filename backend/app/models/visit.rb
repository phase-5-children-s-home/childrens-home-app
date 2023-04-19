class Visit < ApplicationRecord

    belongs_to :user
    belongs_to :home_detail
    belongs_to :location


    def book_visit(visit_date)
        return false unless visit_date.present?
    
        booking = bookings.find_by(visit_date: visit_date)
        if booking
          return false unless booking.pending?
          booking.update(status: "Approved")
        else
          bookings.create(visit_date: visit_date, status: "Pending")
        end
    
        true
    end
end
