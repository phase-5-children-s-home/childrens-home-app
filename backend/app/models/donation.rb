class Donation < ApplicationRecord
    belongs_to :home_detail
    belongs_to :user

    # enum :payment_method[:paypal, :m_pesa, :credit_card]
end
