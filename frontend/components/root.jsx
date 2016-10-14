import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LandingPageContainer from './session/landing_page_container';
import Home from './home/home';
import Place from './places/place';
import SearchContainer from './search/search_container';
import SingleSuggestionContainer from './suggestions/single_suggestion_container';
import UserFeed from './users/user_feed/user_feed';
import UserLikes from './users/user_likes/user_likes';
import Followers from './users/followers/followers';
import Followeds from './users/followers/followeds';

import * as PLACE_ACTIONS from '../actions/place_actions';
import * as SUGGESTION_ACTIONS from '../actions/suggestion_actions';
import * as USER_ACTIONS from '../actions/user_actions';

const Root = ({ store }) => {

  const redirectIfLoggedIn = (nextState, replace) => {
    if(store.getState().session.currentUser !== null) {
      replace({
        pathname: '/home'
      });
    }
  };

  const requestSingleCityOnEnter = (nextState) => {
    console.log(nextState.params.cityId);
    store.dispatch(PLACE_ACTIONS.requestRandomCity());

		// store.dispatch(PLACE_ACTIONS.requestSingleCity(nextState.params.cityId));
	};

  const requestSingleSuggestionOnEnter = (nextState) => {
		store.dispatch(SUGGESTION_ACTIONS.requestSingleSuggestion(nextState.params.suggestionId));
	};

  const requestSingleUserOnEnter = (nextState) => {
		store.dispatch(USER_ACTIONS.requestSingleUser(nextState.params.username));
    store.dispatch(USER_ACTIONS.requestLikedSuggestions(nextState.params.username));
	};


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/signup" component={SignupFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/login" component={LoginFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/home" component={App}>
          <IndexRoute component={Home} />
          <Route path="/cities/:cityId" component={Place} onEnter={requestSingleCityOnEnter} />
          <Route path="/countries/:cityId" component={Place} />
          <Route path="/regions/:cityId" component={Place} />
          <Route path="/suggestions/:suggestionId" component={SingleSuggestionContainer} onEnter={requestSingleSuggestionOnEnter} />
          <Route path="/users/:username/followers" component={Followers} onEnter={requestSingleUserOnEnter} />
          <Route path="/users/:username/follows" component={Followeds} onEnter={requestSingleUserOnEnter} />
          <Route path="/users/:username/likes" component={UserLikes} onEnter={requestSingleUserOnEnter} />
          <Route path="/users/:username" component={UserFeed} onEnter={requestSingleUserOnEnter} />
        </Route>
        <Route path="/" component={LandingPageContainer} onEnter={redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;

// <Route path="/users/:userId/followed-users" component={FollowedUsers} />
