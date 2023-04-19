class HomeDetail < ApplicationRecord

       has_many :reviews
       has_many :donations
       belongs_to :location
       has_many :visits

       def book_visit(visit_date)
              
          Visit.create(visit_date: visit_date)
               
       end
end
