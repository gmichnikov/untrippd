json.extract!(suggestion, :id, :author_id, :body, :food, :attraction, :accommodation, :highlight, :suggestable_id, :suggestable_type, :created_at)
json.author_full_name suggestion.author.full_name
json.author_display_name suggestion.author.display_name
json.place_name suggestion.place_name
json.place_link suggestion.place_link
