class HomeDetailSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :address, :email, :phone_number, :location

  has_many :reviews
  has_many :donations
  belongs_to :location
end
