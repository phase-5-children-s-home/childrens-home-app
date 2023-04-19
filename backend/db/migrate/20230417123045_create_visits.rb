class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.datetime :visit_date
      t.belongs_to :user_id
      t.belongs_to :home_details_id

      t.timestamps
    end
  end
end
