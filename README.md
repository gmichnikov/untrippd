# Untrippd


## Summary

## Overall Structure

#### Back end
The app was built using Ruby on Rails on the back end with a postgreSQL database. Back end structure is RESTful and all  the data requests use AJAX and are fulfilled with a JSON API. Associations are used to prefetch data in order to minimize SQL queries to the database.

#### Front end
The front end is built completely in [React.js][React] and JavaScript and utilizes React's [Flux][Flux] architecture. React's virtual DOM allows for lightning-quick rerendering without requiring new pages to be sent from the server. Even modals appear/disappear using React rather than toggling CSS display properties.

## Features

* Authentication
  * Session is authenticated in the backend. All queries return data that corresponds to the proper user.
  * User can log in from any page in the app. Clicking on a link to save a recipe, access recipe box, etc. prompt the user for log in (as on the original app).
* Save recipes
* Mark recipes as cooked
* Comment on recipes
* Find recipes by tag
* Look at recipe boxes of other users

## Code Guide

If you'd like to take a closer look at the code behind the Cookbook App, the best folders to look in are:

* [Cookbook.jsx](./frontend/Cookbook.jsx)
* [React components](./frontend/components)
  * [App](./frontend/components/app.jsx)
* [Rails controllers](./app/controllers/api)
* [Flux Stores](./frontend/stores)
* [Api Util](./frontend/util/api_util.js)
* [DB Schema](./db/schema.rb)
* [Rails Routes](./config/routes.rb)

#### Libraries

Mintmo uses:
- [React.js][React]
- [Flux][Flux]
- [Chart.js][Chart.js]
- [react-chartjs][react-chartjs]
- [BCrypt](https://github.com/codahale/bcrypt-ruby) for authorization
- [Paperclip](https://github.com/thoughtbot/paperclip) to store user profile images using Amazon Web Services
- [figaro](https://github.com/laserlemon/figaro) to securely store keys and other important data.
- [pg_search][pg_search] to search transactions
- [accounting.js](https://github.com/openexchangerates/accounting.js) to format amounts into currency
- [OmniAuth Facebook][OmniAuth Facebook]

## Primary Components


Country.allsuggestions Query

There is a polymorphic association between suggestions and countries/regions/cities, so users can add suggestions on each type of place. On each country page, I aggregate the suggestions made about the country (e.g. USA), each of its regions (e.g. the 50 states), and each of those region's cities. Joining suggestions on suggestable_id alone would not work, since the query would not be able to distinguish between a city and a region with the same id. So, each join includes a check for both suggestable_id and suggestable_type.

city_ids = City.joins(:region).where("regions.country_id = ?", self.id).pluck(:id)

Suggestion.
  joins("LEFT JOIN cities ON (suggestions.suggestable_id = cities.id AND suggestions.suggestable_type = 'City')").
  joins("LEFT JOIN regions ON (suggestions.suggestable_id = regions.id AND suggestions.suggestable_type = 'Region')").
  where("regions.country_id = ? OR (suggestions.suggestable_id = ? AND suggestions.suggestable_type = 'Country') OR cities.id IN (?)", self.id, self.id, city_ids)
end

The initial city_ids query serves as a subquery that gathers the ids of all cities in the country. Left joins are required so that region-level suggestions are not eliminated after the cities join.


Custom routes for popular cities/countries, follow/unfollow users, like/unlike suggestions

Challenges - updating everything on user profile page when follow status changes

To-dos/future features


## Screenshots



## Next steps for further development of Untrippd

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### asd

asfs

### sdf

sdf
