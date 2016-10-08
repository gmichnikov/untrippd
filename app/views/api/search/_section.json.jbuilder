json.title section[:title]
json.places section[:places] do |place|
  json.partial!('place', place: place)
end
