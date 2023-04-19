class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city

  has_many :home_details

end
