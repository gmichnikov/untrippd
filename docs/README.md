# Untrippd

[Untrippd on Heroku][heroku]

[heroku]: http://www.untrippd.com

## Minimum Viable Product

Untrippd is a web application that allows users to easily share travel recommendations with their friends. It is inspired by Untapped, where users share beer recommendations. It will be built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Places, including parent_places
- [ ] Search for places to write suggestions about
- [ ] Nuggets/Suggestions (about places), with optional boolean tags of food, attraction, and noteworthy/highlight
- [ ] Follows (of other users, and of places)
- [ ] Feed (all nuggets, with checkboxes for followed users/places/food/attraction/noteworthy only), with infinite scroll or pagination
- [ ] Guidebooks
- [ ] Basic User profiles (all of their nuggets, followers/following, list of places, guidebooks)
- [ ] Production README
- [ ] Bonus: Users can mark places as visited/unvisited and use this as an additional filter (also compare visited placed with friends/followed users).
- [ ] Bonus: Feed pulls in external information (e.g. NYT's 36 hours in ___, Zagat, Michelin)
- [ ] Bonus: Auto-suggestion of food/attraction tags for nuggets based on text input.
- [ ] Bonus: CSV export of guidebooks.
- [ ] Bonus: text search of nuggets
- [ ] Bonus: comment/like nuggets
- [ ] Bonus: place names in URL's?




## Design Docs
* [View Wireframes][wireframes]
* [API endpoints][api-endpoints]
* [React Components][components]
* [Redux Structure][redux-structure]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[api-endpoints]: api-endpoints.md
[components]: component-hierarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication, including Header (2 days, Day 1-2)

**Objective:** Functioning rails project with front-end Authentication, site-wide header in place

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin full-page components
- [ ] Blank landing page after signup/signin
- [ ] Style signup/signin components
- [ ] Build header that varies based on signed in/out status
- [ ] Header has correct links and proper styling, incl. positioning at top of each page
- [ ] Header contains non-functioning place search bar at far right
- [ ] Header contains user profile menu on hover when logged in
- [ ] Header contains working button links to log in/sign up pages when not logged in
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Places and Suggestion Model, API, and components (2 days, Days 3-4)

**Objective:** All places entered into DB. Suggestions can be created, read, edited and destroyed through the API. Suggestions feed can be filtered.

- [ ] `place` and `place_type` models
- [ ] Seed database with all places and place_types
- [ ] `suggestion` model
- [ ] CRUD API for suggestions (`SuggestionsController`)
- [ ] JBuilder views for suggestions
- Suggestion components and respective Redux loops
  - [ ] `Suggestions` to view all suggestions in feed
  - [ ] `SinglePlaceContainer` to view feed for that place and create new suggestions
  - [ ] `SingleSuggestion` to view a single suggestion
- [ ] Global Feed can be filtered by three booleans (food, attraction, highlight)
- [ ] Style suggestion components
- [ ] Seed suggestions

### Phase 3: Sidebar and Most Popular Places (1 day, Day 5)

**Objective:** Most Popular Places page and sidebar, as well as other sidebar elements, work properly.

- [ ] Calculate reviews by country properly by aggregating reviews from their cities (using parent_place_id)
- [ ] Sidebar properly shows most reviewed countries
- [ ] Most popular places page shows most reviewed countries and cities
- [ ] Top place suggesters sidebar on single place displays users who have suggested that place
- [ ] Related places show cities in country / same country
- [ ] Style sidebars


### Phase 4: Follows and Basic User Profile (1 day, Day 6)

**Objective:** User can follow users and follow places, and user these as filters in the feed

- [ ] `user_follows` model
- [ ] `place_follows` model
- [ ] Basic user profile contains feed filtered by suggestions authored by the user, as well as link to follow/unfollow
- [ ] User follower/following pages show proper list of users
- [ ] User places in sidebar show proper list of users
- [ ] User can follow other users from their basic profile page, accessible via click on name in feed
- [ ] User can follow place from single place view, accessible via click on place in feed
- [ ] Seed user and place follows
- [ ] Style follows pages and basic user profile


### Phase 5: Place Search (1 day, Day 7)

**Objective:** User can search from the header or the search bar and see reasonable results

- [ ] Search shows an immediate dropdown list of matching places, and a click on that list navigates to the place page
- [ ] If enter/search icon clicked rather than a specific place from dropdown, user is sent to search results page
- [ ] Search results page shows all places with exact match for term, as well as children and/or parents places of those places

### Phase 6: Guidebooks (1 days, Day 8)

**objective:** Users can collect suggestions into guidebooks

- [ ] `guidebooks` and `guidebook_entries` models
- [ ] On any feed item, user has option to mouseover `+` sign and either add the review to an existing guidebook or create a new guidebook, which will then contain the review
- View list of user's guidebooks as part of user profile
- View contents of a single guidebook (which is a filtered version of the overall feed) from user profile
- Styling on guidebooks form/pages



### Phase 7: - Pagination / infinite scroll for Suggestions, and any bonus features (1 day, Day 9)

**objective:** Add infinite scroll to Suggestions Feeds

- [ ] Paginate Suggestions Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll

### Possible Bonus Features (TBD)
- [ ] Bonus: Users can mark places as visited/unvisited and use this as an additional filter (also compare visited placed with friends/followed users).
- [ ] Bonus: Feed pulls in external information (e.g. NYT's 36 hours in ___, Zagat, Michelin)
- [ ] Bonus: Auto-suggestion of food/attraction tags for nuggets based on text input.
- [ ] Bonus: CSV export of guidebooks.
- [ ] Bonus: text search of nuggets
- [ ] Bonus: comment/like nuggets
- [ ] Bonus: place names in URL's?
