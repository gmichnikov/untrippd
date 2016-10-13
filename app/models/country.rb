# == Schema Information
#
# Table name: countries
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  place_type_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Country < ActiveRecord::Base

  validates :name, :lat, :lng, :place_type_id, presence: true
  validates :name, uniqueness: true

  has_many :regions
  has_many :cities, through: :regions, source: :cities
  has_many :suggestions, as: :suggestable

  def self.most_suggested
    City.joins(:region)
      .joins(:country)
      .joins(:suggestions)
      .where(suggestions: {suggestable_type: "City"})
      .group("countries.id")
      .order("count(countries.id) desc")
      .limit(20)
      .select("countries.id, countries.name, count(countries.id)")
  end

  def is_US_or_UK?
    name == "United States" || name == "United Kingdom"
  end

  def all_suggestions
    city_ids = City.joins(:region).where("regions.country_id = ?", self.id).pluck(:id)

    Suggestion.
      joins("INNER JOIN cities ON suggestions.suggestable_id = cities.id").
      joins("INNER JOIN regions ON suggestions.suggestable_id = regions.id").
      where("regions.country_id = ? OR (suggestions.suggestable_id = ? AND suggestions.suggestable_type = 'Country') OR cities.id IN (?)", self.id, self.id, city_ids)
  end

end
