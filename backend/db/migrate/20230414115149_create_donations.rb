class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|
      t.integer :user_id
      t.integer :rating
      t.string :comment

      t.timestamps
    end
  end
end
