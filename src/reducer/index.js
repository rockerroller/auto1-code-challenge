import { combineReducers } from 'redux';
import app from './app';
import main from './main';
import store from './store';

export default combineReducers({
  app,
  main,
  store
});
