json.user_info do
  json.extract!(user, :id, :username, :first_name, :last_name)
  json.full_name user.full_name
  json.num_suggestions user.suggestions.length
  json.num_unique_suggestions user.suggestions.map { |s| s.suggestable_id.to_s + s.suggestable_type }.uniq.length
end
json.suggestions suggestions do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
