json.extract!(user, :username, :id)
json.followeds_ids user.followeds_ids
json.liked_suggestion_ids user.liked_suggestion_ids
