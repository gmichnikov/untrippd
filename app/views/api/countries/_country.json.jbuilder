json.city_info do
  json.extract!(country, :id, :name, :lat, :lng, :place_type_id)
  json.place_type_name "Country"
end
json.suggestions country.all_suggestions do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
