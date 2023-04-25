# class HomeDetailPolicy < ApplicationPolicy
#     attr_reader :user

#     def initialize(user)
#         @user = user
         
#     end

#     def update? 
#         user.admin?
#     end

#     def show
#         user.admin?
#     end
#     def create?       
#      user && user.admin?
#     end

# end