class HomeDetail < ApplicationRecord

       has_many :reviews
       has_many :donations
       belongs_to :location
       has_many :visits

       def book_visit(visit_date)
              return false unless visit_date.present?
          
              booking = book_visit.find_by(visit_date: visit_date)
              if booking
                return false unless booking.pending?
                booking.update(status: "Approved")
              else
                bookings.create(visit_date: visit_date, status: "Pending")
              end
          
              true
       end
end
