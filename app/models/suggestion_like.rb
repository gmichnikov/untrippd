# == Schema Information
#
# Table name: suggestion_likes
#
#  id            :integer          not null, primary key
#  suggestion_id :integer          not null
#  liker_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class SuggestionLike < ActiveRecord::Base

  validates :liker_id, presence: true
  validates :suggestion_id, presence: true, uniqueness: { scope: :liker_id}

  belongs_to :liker,
    class_name: "User",
    foreign_key:  :liker_id

  belongs_to :suggestion
end
