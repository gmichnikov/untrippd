class CreateRegions < ActiveRecord::Migration
  def change
    create_table :regions do |t|
      t.string :name, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :place_type_id, null: false
      t.integer :country_id, null: false

      t.timestamps null: false
    end
    add_index :regions, :place_type_id
    add_index :regions, :country_id
    add_index :regions, :name
  end
end
