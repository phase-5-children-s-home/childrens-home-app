class User < ApplicationRecord
    has_secure_password

    has_many :donations
    has_many :reviews
end
