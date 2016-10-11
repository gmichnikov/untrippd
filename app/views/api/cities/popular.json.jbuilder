json.array! @cities do |city|
  json.id city.id
  json.count city.count
  json.display_name city.display_name
end
