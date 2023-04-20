class User < ApplicationRecord
    has_secure_password

    has_many :visits
    has_many :donations
    has_many :reviews

    #validations 
    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, on: :create
end
