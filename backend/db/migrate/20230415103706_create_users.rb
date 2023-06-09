class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :username, null: false
      t.string :email, null: false 
      t.boolean :admin, default: true
      t.string :password_digest, null: false
      t.string :reset_password_token 
      t.string :reset_password_sent_at

      t.timestamps
    end
  end
end
