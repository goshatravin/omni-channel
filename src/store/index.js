import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';

const loggerModdleware = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware, loggerModdleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export default store;
