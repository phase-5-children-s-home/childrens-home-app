class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :ratings, :comment

  belongs_to :user
  belongs_to :home_detail 
end
