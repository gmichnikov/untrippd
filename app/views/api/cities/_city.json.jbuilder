json.extract!(city, :id, :name, :lat, :lng, :place_type_id, :region_id)
json.place_type_name "City"
json.region_name city.region.name
json.country_name city.country.name
json.country_id city.country.id
json.suggestions city.suggestions do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
