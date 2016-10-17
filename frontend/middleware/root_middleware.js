import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import LoggerMiddleware from './logger_middleware';
import SuggestionMiddleware from './suggestion_middleware';
import PlaceMiddleware from './place_middleware';
import SearchMiddleware from './search_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SuggestionMiddleware,
  PlaceMiddleware,
  SearchMiddleware,
  UserMiddleware,
);

export default RootMiddleware;
