class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :place_type_id, null: false
      t.integer :region_id, null: false

      t.timestamps null: false
    end
    add_index :cities, :place_type_id
    add_index :cities, :region_id
    add_index :cities, :name
  end
end
