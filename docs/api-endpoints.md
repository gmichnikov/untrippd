# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id` - for user profile pages
- `GET /api/followed_users` ?
  - I will need to be able to return the the followers/followees of a given user, I am not sure if that requires a separate api endpoint


### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`



### Places
- I anticipate adding all places myself and not allowing additions. Not sure if this requires a `POST` API endpoint.
- `GET /api/places`
  - Places index (to show most reviewed places) / search (to allow users to find places)
  - accepts `place_name` query param to allow users to search for places
  - pagination of places?
  - as above with followed users, I need to be able to return a user's followed places, and I am not sure if that requires a separate endpoint
- `GET /api/places/:id`
  - for place show page


### Suggestions

- `GET /api/suggestions`
  - suggestions index
  - needs to be filterable, not sure if that would require another endpoint, or if it is better to fetch all of them and then filter?
  - pagination / infinite scroll for feed?
- `POST /api/suggestions`
- `GET /api/suggestions/:id`
- `PATCH /api/suggestions/:id`
- `DELETE /api/suggestions/:id`


### Guidebooks

- `GET /api/guidebooks`
  - to show all of a user's guidebooks
- `POST /api/guidebooks`
- `GET /api/guidebooks/:id`
  - to show all of the reviews in a single guidebook (or is this really part of reviews?)
- `PATCH /api/guidebooks/:id`
- `DELETE /api/guidebooks/:id`



### User-Follows

- `POST /users/:user_id/user_follow`
- `DELETE /users/:user_id/user_follow`

### Place-Follows

- `POST /places/:place_id/place_follow`
- `DELETE /places/:place_id/place_follow`

### Guidebook-Entries
- I am not sure how best to structure this, this could be totally wrong
- `POST /suggestions/:suggestion_id/guidebook_entry/:guidebook_id`
- `DELETE /suggestions/:suggestion_id/guidebook_entry:guidebook_id`
