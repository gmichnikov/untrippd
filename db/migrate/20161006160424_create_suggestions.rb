class CreateSuggestions < ActiveRecord::Migration
  def change
    create_table :suggestions do |t|
      t.integer :author_id, null: false
      t.text :body, null: false
      t.boolean :food, default: false
      t.boolean :attraction, default: false
      t.boolean :accommodation, default: false
      t.boolean :highlight, default: false
      t.references :suggestable, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
