import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import LoggerMiddleware from './logger_middleware';
import SuggestionMiddleware from './suggestion_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SuggestionMiddleware,
  LoggerMiddleware
);

export default RootMiddleware;
