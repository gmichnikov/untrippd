class AddLatLngToSuggestion < ActiveRecord::Migration
  def change
    add_column :suggestions, :lat, :float
    add_column :suggestions, :lng, :float
  end
end
