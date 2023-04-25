# == Schema Information
#
# Table name: home_details
#
#  id           :bigint           not null, primary key
#  address      :string
#  description  :string
#  email        :string
#  image_url    :string
#  location     :string
#  name         :string
#  phone_number :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class HomeDetailSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :address, :email, :phone_number, :location

  has_many :reviews
  has_many :donations
  belongs_to :location
end
