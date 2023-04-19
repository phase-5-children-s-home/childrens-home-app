class CreateHomeDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :home_details do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.string :address
      t.string :email
      t.integer :phone_number
             
      t.timestamps
    end
  end
end
