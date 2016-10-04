import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import LoggerMiddleware from './logger_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  LoggerMiddleware
);

export default RootMiddleware;
