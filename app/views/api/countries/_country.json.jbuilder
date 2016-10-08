json.city_info do
  json.extract!(country, :id, :name, :lat, :lng, :place_type_id)
  json.place_type_name "Country"
  json.secondary_place ""
  json.secondary_link ""
  json.num_suggestions pluralize(country.all_suggestions.length, "suggestion")
end
json.suggestions country.all_suggestions.sort_by(&:created_at).reverse do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
