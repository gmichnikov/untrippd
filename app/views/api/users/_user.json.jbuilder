json.user_info do
  json.extract!(user, :id, :username, :first_name, :last_name)
  json.full_name user.full_name
  json.num_suggestions user.suggestions.length
end
json.suggestions user.suggestions.sort_by(&:created_at).reverse do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
