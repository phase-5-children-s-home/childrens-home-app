class CreatePasswordResets < ActiveRecord::Migration[7.0]
  
  def change
    create_table :password_resets do |t|
      t.references :user, null: false, foreign_key: true
      t.string :token, null: false
      t.datetime :expires_at, null: false

      t.timestamps
    end
  end
end
