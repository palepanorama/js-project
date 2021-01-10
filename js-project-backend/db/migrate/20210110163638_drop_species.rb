class DropSpecies < ActiveRecord::Migration[6.0]
  def up 
    drop_table :species
  end

  def down 
    fail ActiveRecord::IrreversibleMigration 
  end 
end
