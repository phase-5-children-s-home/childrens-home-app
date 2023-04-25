# == Schema Information
#
# Table name: reviews
#
#  id             :bigint           not null, primary key
#  comment        :string
#  rating         :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  home_detail_id :bigint
#  user_id        :bigint
#
# Indexes
#
#  index_reviews_on_home_detail_id  (home_detail_id)
#  index_reviews_on_user_id         (user_id)
#
class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment

  belongs_to :user
  belongs_to :home_detail 
end
