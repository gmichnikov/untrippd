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

require 'test_helper'

class SuggestionLikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
