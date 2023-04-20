class Donation < ApplicationRecord
    belongs_to :home_detail
    belongs_to :user
end
