class AddAttachmentImageToSuggestions < ActiveRecord::Migration
  def self.up
    change_table :suggestions do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :suggestions, :image
  end
end
