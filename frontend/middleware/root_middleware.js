import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import LoggerMiddleware from './logger_middleware';
import SuggestionMiddleware from './suggestion_middleware';
import PlaceMiddleware from './place_middleware';
import SearchMiddleware from './search_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SuggestionMiddleware,
  PlaceMiddleware,
  SearchMiddleware,
  LoggerMiddleware
);

export default RootMiddleware;
