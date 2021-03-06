json.popular_cities @cities do |city|
  json.id city.id
  json.count city.count
  json.display_name city.display_name
  json.num_suggestions pluralize(city.suggestions.length, "suggestion")
end
