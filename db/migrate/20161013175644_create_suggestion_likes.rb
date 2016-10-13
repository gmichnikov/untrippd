class CreateSuggestionLikes < ActiveRecord::Migration
  def change
    create_table :suggestion_likes do |t|
      t.integer :suggestion_id, null: false
      t.integer :liker_id, null: false

      t.timestamps null: false
    end
    add_index :suggestion_likes, :suggestion_id
    add_index :suggestion_likes, :liker_id

  end
end
