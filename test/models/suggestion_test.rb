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
#

require 'test_helper'

class SuggestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
