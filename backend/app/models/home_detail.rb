class HomeDetail < ApplicationRecord

       has_many :reviews
       has_many :donations
       belongs_to :location
end
