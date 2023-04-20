class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.string :visit_date
      t.belongs_to :user
      t.belongs_to :home_detail
       

      t.timestamps
    end
  end
end
