class CreateUserFollows < ActiveRecord::Migration
  def change
    create_table :user_follows do |t|
      t.integer :follower_id, null: false
      t.integer :followed_id, null: false
      t.timestamps null: false
    end
    add_index :user_follows, :followed_id
    add_index :user_follows, :follower_id
  end
end
