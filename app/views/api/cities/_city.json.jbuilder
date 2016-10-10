json.city_info do
  json.extract!(city, :id, :name, :lat, :lng, :place_type_id, :region_id)
  json.place_type_name "City"
  json.region_name city.region.name
  json.country_name city.country.name
  json.country_id city.country.id
  json.secondary_place city.secondary_place
  json.secondary_link city.secondary_link
  json.num_suggestions pluralize(city.suggestions.length, "suggestion")
end
json.suggestions city.suggestions.sort_by(&:created_at).reverse do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
