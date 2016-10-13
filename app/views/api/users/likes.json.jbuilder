json.suggestions @suggestions do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
