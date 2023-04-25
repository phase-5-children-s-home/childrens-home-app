# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  city       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city

  has_many :home_details

end
