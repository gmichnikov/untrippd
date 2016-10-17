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

  const requestRandomCityOnEnter = (nextState) => {
    store.dispatch(PLACE_ACTIONS.requestRandomCity());
	};


  const requestUserFeedOnEnter = (nextState, replace) => {
    if(store.getState().session.currentUser === null) {
      replace({
        pathname: '/login'
      });
    }
		store.dispatch(USER_ACTIONS.requestSingleUser(nextState.params.username));
	};

  const requestUserLikesOnEnter = (nextState, replace) => {
    if(store.getState().session.currentUser === null) {
      replace({
        pathname: '/login'
      });
    }
    store.dispatch(USER_ACTIONS.requestLikedSuggestions(nextState.params.username));
	};


  return (
    <Provider store={store}>
      <Router history={hashHistory} onUpdate={ () => window.scrollTo(0, 0) }>
        <Route path="/signup" component={SignupFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/login" component={LoginFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/home" component={App} >
          <IndexRoute component={Home} />
          <Route path="/cities/:cityId" component={Place} onEnter={requestRandomCityOnEnter} />
          <Route path="/countries/:cityId" component={Place} />
          <Route path="/regions/:cityId" component={Place} />
          <Route path="/users/:username/followers" component={Followers} onEnter={requestUserFeedOnEnter} />
          <Route path="/users/:username/follows" component={Followeds} onEnter={requestUserFeedOnEnter} />
          <Route path="/users/:username/likes" component={UserLikes} onEnter={requestUserLikesOnEnter} />
          <Route path="/users/:username" component={UserFeed} onEnter={requestUserFeedOnEnter} />
        </Route>
        <Route path="/" component={LandingPageContainer} onEnter={redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
