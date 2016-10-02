## Component Heirarchy

**SignUpFormContainer**
 - SignUpForm

**LogInFormContainer**
 - LogInForm

**LandingPageContainer**
 - LandingPage
 - Needs to know if user is already signed in, if so redirect to home page

**HeaderContainer**
  - (The header appears on every page, and varies only based on logged_in?)
  - Header
  - HeaderSearchForm
  - HeaderSessionButtons
  - HeaderProfile

**HomeContainer**
  - SuggestionsContainer (the same suggestions components appear on many of the pages)
    + Suggestions
  - SidebarMostPopularPlacesContainer (similarly this sidebar is on many pages)
    + SidebarMostPopularPlaces

**SinglePlaceContainer**
  - NewSuggestionFormContainer**
    + NewSuggestionForm
  - SuggestionsContainer (same as before, filtered by the place)
    + Suggestions
  - SidebarTopPlaceSuggestersContainer
    - SidebarTopPlaceSuggesters
  - SidebarRelatedPlacesContainer**
    + SidebarRelatedPlaces

**SearchContainer
  - LargeSearchForm
  - SearchResultsContainer
    + SearchResults
  - SidebarMostPopularPlacesContainer (same one as before)
    + SidebarMostPopularPlaces

**SingleSuggestionContainer**
  - SingleSuggestion
  - SidebarMostPopularPlacesContainer (same one as before)
    + SidebarMostPopularPlaces

**MostPopularPlacesContainer**
  - MostPopularCountries
  - SidebarMostPopularCitiesContainer
    + SidebarMostPopularCities

**AddToGuidebook**
  - This component should be available whenever someone hovers on the + on any review
  - Includes a list of user's guidebooks, and a simple form to add one by name


**UserProfileContainer
  - UserProfileHeader (appears on all user profile sub-pages)
  - UserProfileMainContainer (cycles between the following based on selection)
    + SuggestionsContainer (same as regular feeds container, but filtered by user)
    + UserGuidebooksContainer
      + UserGuidebooks
    + UserSingleGuidebookContainer (also the regular feed, filtered for suggestions in the guidebook)
    + UserFollowsContainer (same container for followed/following)
      + UserFollows
  - UserProfileSidebar (these are visible regardless of which is the focus in the main)
    + UserSidebarTopPlacesContainer
      + UserSidebarTopPlaces
    + UserSidebarLinks (links to each of the options in the main section: user's suggestions, user's guidebooks, user's followers, user's following)


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "SignUpFormContainer" |
| "/log-in" | "LogInFormContainer" |
| "/" | "LandingPageContainer" |
| "/home" | "HomeContainer" |
| "/places/:placeId" | "SinglePlaceContainer" |
| "/search" | "SearchContainer" |
| "/places/:placeId/suggestions/:suggestionId" | "SingleSuggestionContainer" |
| "/most-popular" | "MostPopularPlacesContainer" |
| "/users/:userId/suggestions | "UserProfileMainContainer" |
| "/users/:userId/guidebooks | "UserGuidebooksContainer" |
| "/users/:userId/guidebooks/guidebooksId | "UserSingleGuidebookContainer" |
| "/users/:userId/followers | "UserFollowsContainer" |
| "/users/:userId/following | "UserFollowsContainer" |
