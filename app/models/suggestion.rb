# == Schema Information
#
# Table name: suggestions
#
#  id               :integer          not null, primary key
#  author_id        :integer          not null
#  body             :text             not null
#  food             :boolean          default(FALSE)
#  attraction       :boolean          default(FALSE)
#  accommodation    :boolean          default(FALSE)
#  highlight        :boolean          default(FALSE)
#  suggestable_id   :integer
#  suggestable_type :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Suggestion < ActiveRecord::Base

  validates :author_id, :body, :suggestable_id, :suggestable_type, presence: true

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

  belongs_to :suggestable, polymorphic: true

  def place_name
    suggestable.name
  end

end
