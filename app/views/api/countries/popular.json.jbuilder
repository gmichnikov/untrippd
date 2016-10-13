json.popular_countries @countries do |country|
  json.id country.id
  json.count country.count
  json.display_name country.name
end
