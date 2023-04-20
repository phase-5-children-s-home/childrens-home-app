class User < ApplicationRecord
    has_secure_password

    has_many :visits
    has_many :donations
    has_many :reviews

    # validates :username, presence: true
    # validates :email, presence: true, uniqueness: true, format: { with:URI::MailTo::EMAIL_REGEXP}
    # validates :password, presence: true, on: :create
end
