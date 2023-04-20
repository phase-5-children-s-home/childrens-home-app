class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :comment
      t.belongs_to :user
      t.belongs_to :home_detail 

      t.timestamps
    end
  end
end
