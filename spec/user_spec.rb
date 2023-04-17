require_relative '../app/models/user'


RSpec.describe User, type: :model do
    describe 'validations' do
      it { should validate_presence_of(:email) }
      it { should validate_uniqueness_of(:email).case_insensitive }
    end
  end