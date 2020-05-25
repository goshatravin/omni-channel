import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import omniReducer from './omniReducer';
import socketReducer from './socketReducer';
import referenceReducer from './referenceReducer';

const rootReducer = combineReducers({
  omniReducer,
  loginReducer,
  referenceReducer,
  socketReducer,
});

export default rootReducer;
