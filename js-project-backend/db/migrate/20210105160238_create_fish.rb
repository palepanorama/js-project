class CreateFish < ActiveRecord::Migration[6.0]
  def change
    create_table :fish do |t|
      t.string :name
      t.integer :buyer_id
      t.integer :seller_id

      t.timestamps
    end
  end
end
