json.user_info do
  json.extract!(user, :id, :username, :first_name, :last_name)
  json.full_name user.full_name
  json.num_suggestions user.suggestions.length
  json.num_unique_suggestions user.suggestions.map { |s| s.suggestable_id.to_s + s.suggestable_type }.uniq.length
  json.followed_by_current_user followers.include?(current_user)
  json.followers followers do |follower|
    json.follower_id follower.id
    json.follower_display_name follower.display_name
    json.follower_username follower.username
    json.current_user_follows_user follower.current_user_follows_user(current_user)
  end
  json.followeds followeds do |followed|
    json.followed_id followed.id
    json.followed_display_name followed.display_name
    json.followed_username followed.username
    json.current_user_follows_user followed.current_user_follows_user(current_user)
  end
  json.num_followers followers.count
  json.num_followeds followeds.count
end
json.suggestions suggestions do |suggestion|
  json.partial!('api/suggestions/suggestion', suggestion: suggestion)
end
