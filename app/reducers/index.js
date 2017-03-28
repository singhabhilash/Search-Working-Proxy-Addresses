// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import workingProxyArray from './workingProxyArray';

const rootReducer = combineReducers({
  workingProxyArray,
  routing
});

export default rootReducer;
