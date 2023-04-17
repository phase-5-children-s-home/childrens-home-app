class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.datetime :visit_date
      t.integer :user_id
      t.integer :home_details_id

      t.timestamps
    end
  end
end
