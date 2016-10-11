json.partial!('api/users/current_user', user: @user)

# json.extract!(@user, :username, :id)
# json.followeds_ids @followeds_ids
