```js
{
  currentUser: {
    id: 1,
    username: "gmichnikov",
    first_name: "greg",
    last_name: "michnikov",
    guidebooks: {
      1: {
        id: 1,
        name: "England",
      },
      2: {
        id: 2,
        name: "Japan",
      }
    }
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createSuggestion: {errors: []}
  },
  feed_filters: {
    users_filter: {only_followed_users: true, user_ids = [2, 3]}
    places_filter: {only_followed_places: false, places_ids = []}
    only_food: false,
    only_attraction: true,
    only_highlight: false,
  },
  suggestions: {
    1: {
      body: "Visit the Tower of London",
      author_id: 2,
      author_name: "Caitlin M",
      place_id: 1,
      place_name: "London, England",
      food: false,
      attraction: true,
      highlight: true,
    },
    3: {
      body: "Visit the Sydney Opera House",
      author_id: 3,
      author_name: "Liam M",
      place_id: 12,
      place_name: "Sydney, Australia",
      food: false,
      attraction: true,
      highlight: false,
    },
    5: {
      body: "Kiyomizu Dera is an amazing wooden temple",
      author_id: 2,
      author_name: "Caitlin M",
      place_id: 14,
      place_name: "Kyoto, Japan",
      food: false,
      attraction: true,
      highlight: true,
    }
  },
  most_popular_places: [
    { place_name: "Rome, Italy", place_id: 7, num_reviews: 48, },
    { place_name: "London, England", place_id: 1, num_reviews: 30, },
    { place_name: "Istanbul, Turkey", place_id: 11, num_reviews: 22, },
    { place_name: "Paris, France", place_id: 6, num_reviews: 17, },
    { place_name: "Melbourne, Australia", place_id: 8, num_reviews: 14, },
  ]
}
```
