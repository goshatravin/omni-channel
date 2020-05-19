import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import omniReducer from './omniReducer';

const rootReducer = combineReducers({
  omniReducer,
  loginReducer,
});

export default rootReducer;
