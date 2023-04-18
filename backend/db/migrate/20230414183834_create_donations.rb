class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|
      t.integer :amount
      t.string :name 
      t.string :payment_method, default:0 

      t.timestamps
    end
  end
end
