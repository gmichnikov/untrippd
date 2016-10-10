json.city_info do
  json.extract!(region, :id, :name, :lat, :lng, :place_type_id, :country_id)
  json.place_type_name "Region"
  json.country_name region.country.name
  json.secondary_place region.country.name
  json.secondary_link "/countries/#{region.country_id}"
  json.num_suggestions pluralize(suggestions.count, "suggestion")
end
json.suggestions suggestions do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
