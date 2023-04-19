class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.datetime :visit_date
      t.belongs_to :user
      t.belongs_to :home_detail
      t.belongs_to :location 

      t.timestamps
    end
  end
end
