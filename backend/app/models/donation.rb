class Donation < ApplicationRecord
    belongs_to :home_detail
    belongs_to :User
    

    # enum :payment_method[:paypal, :m_pesa, :credit_card]
end
