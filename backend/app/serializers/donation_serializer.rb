class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :name, :payment_method

  belongs_to :home_detail
  belongs_to :user
end
