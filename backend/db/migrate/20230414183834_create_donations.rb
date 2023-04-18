class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|

      t.integer :amount
      t.string :name 
      t.integer :payment_method, default:0 
      t.string :email
      t.belongs_to :home_detail_id
      t.belongs_to :user_id

      t.timestamps
    end
  end
end
