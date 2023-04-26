# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  admin                  :boolean          default(FALSE)
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
RSpec.describe User, type: :model do
    subject { described_class.new }
  
    it "is valid with valid attributes" do
      subject.username = "testuser"
      subject.email = "testuser@example.com"
      subject.password = "password"
      expect(subject).to be_valid
    end
  
    it "is not valid without a username" do
      subject.email = "testuser@example.com"
      subject.password = "password"
      expect(subject).not_to be_valid
    end
  
    it "is not valid without an email" do
      subject.username = "testuser"
      subject.password = "password"
      expect(subject).not_to be_valid
    end
  
    it "is not valid without a password" do
      subject.username = "testuser"
      subject.email = "testuser@example.com"
      expect(subject).not_to be_valid
    end
  
    it "is not valid with a duplicate username" do
      existing_user = create(:user, username: "testuser")
      subject.username = "testuser"
      subject.email = "testuser2@example.com"
      subject.password = "password"
      expect(subject).not_to be_valid
    end
  
    it "is not valid with a duplicate email" do
      existing_user = create(:user, email: "testuser@example.com")
      subject.username = "testuser"
      subject.email = "testuser@example.com"
      subject.password = "password"
      expect(subject).not_to be_valid
    end
  
    it "returns a user's full name" do
      user = create(:user, first_name: "John", last_name: "Doe")
      expect(user.full_name).to eq("John Doe")
    end
  
    it "returns true if the password is valid" do
      user = create(:user, password: "password")
      expect(user.authenticate("password")).to eq(true)
    end
  
    it "returns false if the password is invalid" do
      user = create(:user, password: "password")
      expect(user.authenticate("wrongpassword")).to eq(false)
    end
  end
  
