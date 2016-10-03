# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `LogInForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `HeaderProfile` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.


## User Cycles

### User API Request Actions

* `fetchUserInfo`
  0. invoked from `UserProfileContainer` `didMount`/`willReceiveProps`
  0. `GET /api/users/:id` is called.
  0. `receiveUserInfo` is set as the success callback.


### Places API Response Actions

* `receiveUserInfo`
  0. invoked from an API callback
  0. the `UserReducer` updates `profiledUser` in the application's state.


## Places Cycles

### Places API Request Actions

* `fetchSinglePlace`
  0. invoked from `SinglePlaceContainer` `didMount`/`willReceiveProps`
  0. `GET /api/places/:id` is called.
  0. `receiveSinglePlace` is set as the success callback.

* `fetchAllPlaces`
  0. invoked from `MostPopularPlacesContainer` and `SidebarMostPopularPlacesContainer`,  `didMount`/`willReceiveProps`
  0. `GET /api/places` is called. This call requires filtering the places, and I do not know if this should happen by passing in params, or in the controller, or after the data is received.
  0. I also need to be able to request places in response to a user search. I don't know if this requires a separate controller action/API endpoint, but it will require the search text being passed as a param.

  0. `receiveAllPlaces` is set as the success callback.

### Places API Response Actions

* `receiveSinglePlace`
  0. invoked from an API callback
  0. the `PlacesReducer` updates `singlePlace` in the application's state.

* `receivePlaces`
  0. invoked from an API callback
  0. it feels like "popular places" and "places that match the search request" should be in different places in state, so perhaps this indicates that there should be two different actions/API endpoints
  0. the `PlacesReducer` updates either `searchResults` or `popularPlaces` in the application's state.


## Suggestion Cycles

### Suggestions API Request Actions

* `fetchAllSuggestions`
  0. invoked from `SuggestionsContainer` `didMount`/`willReceiveProps`
  0. `GET /api/suggestions` is called.
  0. `receiveAllSuggestions` is set as the success callback.
  0. I am going to need to do a lot of filtering of the results here in different settings, since many components will display a subset of suggestions (global feed, user profile, guidebook). I do not know the best way to handle this.

* `createSuggestion`
  0. invoked from create suggestion button `onClick` in `NewSuggestionFormContainer`
  0. `POST /api/suggestions` is called.
  0. `receiveSingleSuggestion` is set as the success callback.

* `fetchSingleSuggestion`
  0. invoked from `SingleSuggestionContainer` `didMount`/`willReceiveProps`
  0. `GET /api/suggestions/:id` is called.
  0. `receiveSingleSuggestion` is set as the success callback.

* `updateSuggestion`
  0. invoked from `NewSuggestionFormContainer` `onSubmit`
  0. `POST /api/suggestions` is called.
  0. `receiveSingleSuggestion` is set as the success callback.

* `destroySuggestion`
  0. invoked from delete suggestion button `onClick`
  0. `DELETE /api/suggestions/:id` is called.
  0. `removeSuggestion` is set as the success callback.

### Suggestions API Response Actions

* `receiveAllSuggestions`
  0. invoked from an API callback
  0. the `SuggestionReducer` updates `suggestions` in the application's state.

* `receiveSingleSuggestion`
  0. invoked from an API callback
  0. the `SuggestionReducer` updates `suggestions[id]` in the application's state.

* `removeSuggestion`
  0. invoked from an API callback
  0. the `SuggestionReducer` removes `suggestions[id]` from the application's state.


## Guidebook Cycles

### Guidebooks API Request Actions

* `fetchAllGuidebooks`
  0. invoked from `UserGuidebooksContainer` `didMount`/`willReceiveProps`
  0. `GET /api/guidebooks` is called.
  0. `receiveUserGuidebooks` is set as the success callback.
  0. Since this is always going to be a specific user's guidebooks, I am not sure if it would make sense to include a user_id in the API url?

* `createGuidebook`
  0. invoked from create guidebook mini-form `onClick` in `AddToGuidebook`
  0. `POST /api/guidebooks` is called.
  0. `receiveSingleGuidebook` is set as the success callback.

* `fetchSingleGuidebook`
  0. invoked from `UserSingleGuidebookContainer` `didMount`/`willReceiveProps`
  0. `GET /api/guidebooks/:id` is called.
  0. `receiveSingleGuidebook` is set as the success callback.
  0. Fetching a guidebook is really just fetching all of the suggestions that are in the guidebook. The only additional piece of data is the name of the guidebook. I am not sure if this would make more sense as a suggestions request.

* `updateSuggestion`
  0. invoked from a form within the `UserSingleGuidebookContainer` `onSubmit`
  0. `POST /api/guidebooks` is called.
  0. `receiveSingleGuidebook` is set as the success callback.

* `destroyGuidebook`
  0. invoked from delete guidebook button `onClick`, also in `UserSingleGuidebookContainer`
  0. `DELETE /api/guidebooks/:id` is called.
  0. `removeGuidebook` is set as the success callback.

### Guidebooks API Response Actions

* `receiveAllGuidebooks`
  0. invoked from an API callback
  0. the `GuidebooksReducer` updates `userGuidebooks` in the application's state.

* `receiveSingleGuidebook`
  0. invoked from an API callback
  0. the `GuidebookReducer` updates `guidebooks[id]` in the application's state.

* `removeGuidebook`
  0. invoked from an API callback
  0. the `GuidebooksReducer` removes `guidebooks[id]` from the application's state.


## User Follows Cycles

### User Follows API Request Actions

* `createUserFollow`
  0. invoked from follow button `onClick` on `UserProfileHeader`, and possibly button on suggestions as well
  0. `POST /users/:user_id/user_follow` is called.
  0. `receiveUserFollow` is set as the success callback.

* `destroyUserFollow`
  0. invoked from unfollow button `onClick` on `UserProfileHeader`, and possibly button on suggestions as well
  0. `DELETE /users/:user_id/user_follow` is called.
  0. `removeUserFollow` is set as the success callback.

### UserFollows API Response Actions

* `receiveUserFollow`
  0. invoked from an API callback
  0. the `UsersReducer` updates `profiledUser` in the application's state.

* `removeUserFollow`
  0. invoked from an API callback
  0. the `UsersReducer` updates `profiledUser` in the application's state.


## Place Follows Cycles

### Place Follows API Request Actions

* `createPlaceFollow`
  0. invoked from follow button `onClick` on `SinglePlaceContainer`, and possibly button on suggestions as well
  0. `POST /places/:place_id/place_follow` is called.
  0. `receivePlaceFollow` is set as the success callback.

* `destroyPlaceFollow`
  0. invoked from unfollow button `onClick` on `SinglePlaceContainer`, and possibly button on suggestions as well
  0. `DELETE /places/:place_id/place_follow` is called.
  0. `removePlaceFollow` is set as the success callback.

### PlaceFollows API Response Actions

* `receivePlaceFollow`
  0. invoked from an API callback
  0. the `UsersReducer` updates `profiledUser` in the application's state (the user's list of "my places")

* `removePlaceFollow`
  0. invoked from an API callback
  0. the `UsersReducer` updates `profiledUser` in the application's state.


### GuidebookEntries API Response Actions

* `createGuidebookEntry`
  0. invoked from `AddToGuidebook` button `onClick` on every suggestion
  0. `POST /suggestions/:suggestion_id/guidebook_entry/:guidebook_id` is called.
  0. `receiveGuidebookEntry` is set as the success callback.

* `destroyGuidebookEntry`
  0. invoked from button `AddToGuidebook` on every suggestion
  0. `DELETE /suggestions/:suggestion_id/guidebook_entry:guidebook_id` is called.
  0. `removeGuidebookEntry` is set as the success callback.

### PlaceFollows API Response Actions

* `receiveGuidebookEntry`
  0. invoked from an API callback
  0. this may need to invoke another API request action (?) to get an updated list of suggestions that should be in a given feed. It should also update the Suggestions[id] portion of state associated with this item

* `removePlaceFollow`
  0. invoked from an API callback
  0. this may need to invoke another API request action (?) to get an updated list of suggestions that should be in a given feed. It should also update the Suggestions[id] portion of state associated with this item
