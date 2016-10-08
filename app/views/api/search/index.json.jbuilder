json.array! @all_places do |section|
  json.partial!('section', section: section)
end
