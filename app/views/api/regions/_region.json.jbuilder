json.region_info do
  json.extract!(region, :id, :name, :lat, :lng, :place_type_id, :country_id)
  json.place_type_name "Region"
  json.country_name region.country.name
end
json.suggestions region.all_suggestions do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
