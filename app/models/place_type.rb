# == Schema Information
#
# Table name: place_types
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PlaceType < ActiveRecord::Base
  validates :name, presence: true
end
