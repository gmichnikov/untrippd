json.array! @all_places do |place|
  json.partial!('place', place: place)
end
