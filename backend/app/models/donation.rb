class Donation < ApplicationRecord
    belongs_to :home_details
    belongs_to :user
end
