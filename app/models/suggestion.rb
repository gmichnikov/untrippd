# == Schema Information
#
# Table name: suggestions
#
#  id                 :integer          not null, primary key
#  author_id          :integer          not null
#  body               :text             not null
#  food               :boolean          default(FALSE)
#  attraction         :boolean          default(FALSE)
#  accommodation      :boolean          default(FALSE)
#  highlight          :boolean          default(FALSE)
#  suggestable_id     :integer
#  suggestable_type   :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  lat                :float
#  lng                :float
#

class Suggestion < ActiveRecord::Base

  # attr_accessor :image_file_name

  validates :author_id, :body, :suggestable_id, :suggestable_type, presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

  belongs_to :suggestable, polymorphic: true

  has_many :suggestion_likes

  has_many :likers,
    through: :suggestion_likes,
    source: :liker

  def place_name
    suggestable.name
  end

  def place_link
    "/#{suggestable_type.tableize}/#{suggestable_id}"
  end


end
