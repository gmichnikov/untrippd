# Untrippd

[Live at Untrippd.com][untrippd]
[untrippd]: http://www.untrippd.com

## Summary

> Looking back at my favorite vacation spots, several have one vital thing in common: they were suggested by friends."

[Crowd-Sourcing for Travel Advice][nytimes], New York Times, August 17, 2011
[nytimes]: http://www.nytimes.com/2011/08/21/travel/crowd-sourcing-for-travel-advice.html?_r=0

Untrippd is a travel recommendation app inspired by the beer recommendation site [Untappd][untappd].
[untappd]: http://www.untappd.com

Untrippd allows users to
1. Easily share recommendations with their friends, so that others can benefit from their travel experiences.
2. Browse others' recommendations, discovering tidbits that will make their own trips that much more memorable.

## Structure

### Back end
Untrippd was built using Ruby on Rails with a postgreSQL database. All data requests for users, places, and suggestions use AJAX, and all responses are JSON, created with jbuilder.

### Front end
Untrippd is a single page app, and the front end is built with React and Redux.

## Features

### Polymorphic Suggestions

`Suggestions` can be applied to `countries`, `regions`, and `cities`; each suggestion has both a `suggestable_id` (the id of the country, region, or city), as well as a `suggestable_type` (the corresponding class name in string form, e.g. 'City'). On each country page ([example](http://www.untrippd.com/#/countries/220)), I aggregate the suggestions made about the country (e.g. USA), each of its regions (e.g. the 50 states), and each of those region's cities. Joining suggestions on `suggestable_id` alone would not work, since the query would not be able to distinguish between a city and a region with the same id. So, each join includes a check for both `suggestable_id` and `suggestable_type`.

```ruby
city_ids = City.joins(:region).where("regions.country_id = ?", self.id).pluck(:id)

Suggestion.
  joins("LEFT JOIN cities ON (suggestions.suggestable_id = cities.id AND suggestions.suggestable_type = 'City')").
  joins("LEFT JOIN regions ON (suggestions.suggestable_id = regions.id AND suggestions.suggestable_type = 'Region')").
  where("regions.country_id = ? OR (suggestions.suggestable_id = ? AND suggestions.suggestable_type = 'Country') OR cities.id IN (?)", self.id, self.id, city_ids)
end
```

The initial city_ids query serves as a subquery that gathers the ids of all cities in the country. Left joins are required so that region-level suggestions are not eliminated after the cities join.


### Custom Routes and Controller Actions

Both UserFollows and SuggestionLikes use custom [routes](https://github.com/gmichnikov/untrippd/blob/master/config/routes.rb) and controller actions.

Routes for SuggestionLikes:
```ruby
post 'suggestions/:id/like' => 'suggestions#like', as: :suggestion_like
post 'suggestions/:id/unlike' => 'suggestions#unlike', as: :suggestion_unlike
```
In both cases, the action can only be taken if the user is logged in; in this case, the current user's id is known, so only one additional piece of data must be provided to the controller via the route. In the above example, the route includes the `id` of the `suggestion` in question.

Controller Action for UserFollow:
```ruby
def follow
  @user = User.find(params[:id])
  @user.followers << current_user
  render json: @user.id
end
```
The line `@user.followers << current_user` takes advantage of a method provided by Rails associations. There is no mention in the code of a `UserFollow` object. Instead, it is created implicitly when the `current_user` is added to the list of followers of `@user`.

### Multiple Reducers Listening for the Same Action

There are two different situations in the code of Untrippd in which multiple reducers need to listen for the same action.

In the first case, each reducer pays attention to a different part of the JSON response in order to update the corresponding parts of the application state. For example, when a user navigates to a place show page, the [response](https://github.com/gmichnikov/untrippd/blob/master/app/views/api/cities/_city.json.jbuilder) includes both place data and suggestions data. The [PlaceReducer](https://github.com/gmichnikov/untrippd/blob/master/frontend/reducers/place_reducer.js) and [SuggestionReducer](https://github.com/gmichnikov/untrippd/blob/master/frontend/reducers/suggestion_reducer.js) both listen and respond to RECEIVE_SINGLE_CITY actions.

```javascript
const PlaceReducer = (oldState = defaultPlacesState, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_SINGLE_CITY:
      return Object.assign({}, oldState, { singleCity: action.city_info });
    ...
  }
};
```

```javascript
const SuggestionReducer = (oldState = default_suggestion_state, action) => {
  switch (action.type) {
    case PLACE_ACTIONS.RECEIVE_SINGLE_CITY:
      return Object.assign({}, oldState, { manySuggestions: action.suggestions });
    ...
  }
};
```
In the second case, both the UserReducer and the SessionReducer must listen for actions related to user follows/unfollows in order to ensure that all relevant parts of a page are re-rendered. This can be observed by logging is guest and then heading to any other user's [followers page](http://www.untrippd.com/#/users/eve.cremin/followers). Clicking follow/unfollow will immediately trigger 4 different changes on the page.


### Search
There is a dedicated [search controller](https://github.com/gmichnikov/untrippd/blob/master/app/controllers/api/search_controller.rb) that handles the place search. Initially, the search would load all 2500+ cities, as well as the 50 states and the 200+ countries. However, it took over 5 seconds for this data to load; the search was not available during this time. Now, searching takes place every time a key is pressed (as long as 3+ letters have been typed). A basic regex match is used to identify places that match the input, and the data is returned in the structure required by the react-autosuggest package:

```ruby
@all_places = [{title: "Countries (#{num_countries})", places: @countries + @uk_countries}, {title: "States (#{num_states})", places: @states}, {title: "Cities (#{num_cities})", places: @cities}]
```

This allows the search results to appear in three sections (country, state, city), rather than ll together. The result of this can be seen by searching for "New" on any page of the site. New Zealand, New York, and New Orleans appear in three different parts of the search results.

### Google Places API
The suggestion form contains an optional search field into which a user can enter an address or business associated with each suggestion. The power of Google makes hundreds of millions of address/places available through this search bar. If a location is entered, the suggestion is then rendered with a google map that shows a marker at that location.

### Travel-Specific Features: Special Regions, Exploring the World

#### Special Regions
There are over 2000 Regions in the database, but the only ones that appear in the search, or in the display name's of their cities, are the 50 US states, the District of Columbia, and the 4 "regions" of the United Kingdom (England, Northern Ireland, Scotland, Wales). The latter are treated as countries in the search, while the former appear in a category of their own. If this were to acquire a global userbase, it would be worth consider if regions in other countries should appear as well (e.g. Rome, Lazio, Italy instead of Rome, Italy).

#### Exploring the World
This link in the header takes the user to a random city page that has at least one suggestion on it. This feature would become more and more interesting as more suggestions are added to the site.


## Place Data

Place data was sourced from [Esri Open Data](http://beta.esri.opendata.arcgis.com/datasets/6996f03a1b364dbab4008d99380370ed_0). The `World Cities` data table was parsed into three postgreSQL tables (`cities`, `regions`, and `countries`) using Pivot Tables, VLookups, and CSV exports in Google Sheets.


## Libraries

### Untrippd uses:
- [React.js](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [BCrypt](https://github.com/codahale/bcrypt-ruby) for authorization
- [React Autosuggest](https://github.com/moroshko/react-autosuggest) for the place search at the top-right of each page
- [React Toggle](https://github.com/aaronshaf/react-toggle) for filtering the list of suggestions by topic and/or followed users
- [React Modal](https://github.com/reactjs/react-modal) for the suggestion creation form modal
- [React Notification](https://github.com/pburtchaell/react-notification) for the signup/login welcome notification
- [React Timeago](https://github.com/nmn/react-timeago) to display the time since a suggestion was posted
- [React Tooltip](https://github.com/nmn/react-timeago) for various tooltips, e.g. Delete Suggestion
- [React Emoji](https://github.com/banyan/react-emoji) to allow emoji notation in suggestions
- [Paperclip](https://github.com/thoughtbot/paperclip) to store the images users may add to any suggestion, using Amazon Web Services
- [Figaro](https://github.com/laserlemon/figaro) to store AWS keys
- [Google's Material Icons](https://design.google.com/icons/) for many button/tags, including like/unlike, delete suggestions, food/attraction/accomodation, add photo, and more.


## Next steps for further development of Untrippd

I plan to continue to develop Untrippd, since I would genuinely would love to see the number of suggestions reach a point where, at the very least, a small set of users would be sure to visit this site while planning a trip. Some possible features include:

#### Pagination and/or Infinite Scroll
- Currently, all suggestions are loaded immediately on every page with the suggestion feed. As the site grows, it would be best to load results in batches.

#### Guidebooks
-  Currently users can like suggestions, which serves as a way to save suggestions for later viewing. Ideally, users would be able to save suggestions into custom collections ("guidebooks") for better organization.

#### Place following
- Similar to user follows. This would allow a user to see only suggestions about a subset of the places in the world.

## Screenshots

Coming Soon!
