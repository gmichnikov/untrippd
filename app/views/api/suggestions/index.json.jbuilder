json.array! @suggestions do |suggestion|
  json.partial!('suggestion', suggestion: suggestion)
end
