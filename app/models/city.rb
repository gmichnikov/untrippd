# == Schema Information
#
# Table name: cities
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  place_type_id :integer          not null
#  region_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class City < ActiveRecord::Base

  validates :name, :lat, :lng, :place_type_id, :region_id, presence: true

  belongs_to :region
  has_one :country, through: :region, source: :country
  has_many :suggestions, as: :suggestable

  alias_attribute :state, :region

  def self.most_suggested
    @cities = City.find_by_sql("SELECT cities.id, cities.name, cities.region_id, count(cities.id) FROM suggestions INNER JOIN cities ON suggestions.suggestable_id = cities.id AND suggestions.suggestable_type = 'City' GROUP BY cities.id ORDER BY count(cities.id) DESC LIMIT 20")

    @cities
  end

  def self.explore
    @cities = City.find_by_sql("SELECT cities.id, cities.name, cities.region_id, count(cities.id) FROM suggestions INNER JOIN cities ON suggestions.suggestable_id = cities.id AND suggestions.suggestable_type = 'City' GROUP BY cities.id")

    @cities.shuffle.take(2)
  end

  def secondary_place
    if country.name == "United States"
      "#{region.name}, USA"
    elsif country.name == "United Kingdom"
      "#{region.name}, UK"
    else
      country.name
    end
  end

  def secondary_link
    if country.name == "United States" || country.name == "United Kingdom"
      "/regions/#{region_id}"
    else
      "/countries/#{country.id}"
    end
  end

  def display_name
    usa = Country.find_by(name: "United States")
    uk = Country.find_by(name: "United Kingdom")

    if country == usa
      after_comma = ", #{state.name}, USA"
    elsif country == uk
      after_comma = ", #{region.name}, UK"
    else
      after_comma = ", #{country.name}"
    end
    name + after_comma
  end

end
