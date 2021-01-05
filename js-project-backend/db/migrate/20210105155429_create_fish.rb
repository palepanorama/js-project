class CreateFish < ActiveRecord::Migration[6.0]
  def change
    create_table :fish do |t|
      t.string :name
      t.string :species
      t.integer :buyer_id
      t.integer :vendor_id

      t.timestamps
    end
  end
end
