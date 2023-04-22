# == Schema Information
#
# Table name: donations
#
#  id             :bigint           not null, primary key
#  amount         :integer
#  email          :string
#  name           :string
#  payment_method :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  home_detail_id :bigint
#  user_id        :bigint
#
# Indexes
#
#  index_donations_on_home_detail_id  (home_detail_id)
#  index_donations_on_user_id         (user_id)
#
class Donation < ApplicationRecord
    belongs_to :home_detail
    belongs_to :user
end
