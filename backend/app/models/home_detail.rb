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
class HomeDetail < ApplicationRecord

       has_many :reviews
       has_many :donations
        
       has_many :visits

       def book_visit(visit_date)
              
          Visit.create(visit_date: visit_date)
               
       end
end
