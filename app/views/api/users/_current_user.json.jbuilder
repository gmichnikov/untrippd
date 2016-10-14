json.extract!(user, :username, :id)
json.followeds_ids user.followeds_ids
json.liked_suggestion_ids user.liked_suggestion_ids
json.display_name user.display_name
