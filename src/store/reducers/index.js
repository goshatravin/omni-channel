import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import omniReducer from './omniReducer';
import referenceReducer from './referenceReducer';

const rootReducer = combineReducers({
  omniReducer,
  loginReducer,
  referenceReducer,
});

export default rootReducer;
