class AddColumnToFish < ActiveRecord::Migration[6.0]
  def change
    add_column :fish, :vendor_id, :integer 
  end
end
