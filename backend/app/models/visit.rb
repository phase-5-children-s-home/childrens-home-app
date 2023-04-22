# == Schema Information
#
# Table name: visits
#
#  id             :bigint           not null, primary key
#  visit_date     :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  home_detail_id :bigint
#  user_id        :bigint
#
# Indexes
#
#  index_visits_on_home_detail_id  (home_detail_id)
#  index_visits_on_user_id         (user_id)
#
class Visit < ApplicationRecord

    belongs_to :user
    belongs_to :home_detail
    
end
