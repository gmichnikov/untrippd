json.city_info do
  json.extract!(region, :id, :name, :lat, :lng, :place_type_id, :country_id)
  json.place_type_name "Region"
  json.country_name region.country.name
  json.secondary_place region.country.name
  json.secondary_link "/countries/#{region.country_id}"
  json.num_suggestions pluralize(region.all_suggestions.length, "suggestion")
end
json.suggestions region.all_suggestions.sort_by(&:created_at).reverse do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
