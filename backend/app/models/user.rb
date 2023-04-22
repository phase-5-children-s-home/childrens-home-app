# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           not null
#  firstname              :string
#  lastname               :string
#  password_digest        :string           not null
#  reset_password_sent_at :string
#  reset_password_token   :string
#  username               :string           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
class User < ApplicationRecord
    has_secure_password

    has_many :visits
    has_many :donations
    has_many :reviews

    # validates :username, presence: true
    # validates :email, presence: true, uniqueness: true, format: { with:URI::MailTo::EMAIL_REGEXP}
    # validates :password, presence: true, on: :create

end
