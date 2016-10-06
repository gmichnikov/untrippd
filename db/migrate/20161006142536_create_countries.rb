class CreateCountries < ActiveRecord::Migration
  def change
    create_table :countries do |t|
      t.string :name, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :place_type_id, null: false

      t.timestamps null: false
    end
    add_index :countries, :place_type_id
    add_index :countries, :name
  end
end
