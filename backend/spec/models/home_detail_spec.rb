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
require 'rails_helper'

RSpec.describe HomeDetail, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
