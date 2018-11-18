import { combineReducers } from 'redux';
import app from './app';
import main from './main';
import store from './store';
import detail from './detail';

export default combineReducers({
  app,
  main,
  store,
  detail
});
