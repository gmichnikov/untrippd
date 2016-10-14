# == Schema Information
#
# Table name: regions
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  place_type_id :integer          not null
#  country_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Region < ActiveRecord::Base

  validates :name, :lat, :lng, :place_type_id, :country_id, presence: true

  belongs_to :country
  has_many :cities
  has_many :suggestions, as: :suggestable


  def all_suggestions
    Suggestion.
    joins("LEFT JOIN cities ON (suggestions.suggestable_id = cities.id AND suggestions.suggestable_type = 'City')").
    where("cities.region_id = ? OR (suggestions.suggestable_id = ? AND suggestions.suggestable_type = 'Region')", self.id, self.id)
  end

end
