import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LandingPageContainer from './session/landing_page_container';
import Home from './home/home';
import PlacesContainer from './places/places_container';
import SingleCityContainer from './places/single_city_container';
import SingleSuggestionContainer from './suggestions/single_suggestion_container';

import * as PLACE_ACTIONS from '../actions/place_actions';
import * as SUGGESTION_ACTIONS from '../actions/suggestion_actions';

const Root = ({ store }) => {

  const redirectIfLoggedIn = (nextState, replace) => {
    if(store.getState().session.currentUser !== null) {
      replace({
        pathname: '/home'
      });
    }
  };

  const requestSingleCityOnEnter = (nextState) => {
		// store.dispatch(PLACE_ACTIONS.requestSingleCity(nextState.params.cityId));
	};

  const requestSingleSuggestionOnEnter = (nextState) => {
		store.dispatch(SUGGESTION_ACTIONS.requestSingleSuggestion(nextState.params.suggestionId));
	};


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/signup" component={SignupFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/login" component={LoginFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/home" component={App}>
          <IndexRoute component={Home} />
          <Route path="/places" component={PlacesContainer} />
          <Route path="/cities/:cityId" component={SingleCityContainer} onEnter={requestSingleCityOnEnter} />
          <Route path="/countries/:cityId" component={SingleCityContainer} />
          <Route path="/regions/:cityId" component={SingleCityContainer} />
          <Route path="/suggestions/:suggestionId" component={SingleSuggestionContainer} onEnter={requestSingleSuggestionOnEnter} />
        </Route>
        <Route path="/" component={LandingPageContainer} onEnter={redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
