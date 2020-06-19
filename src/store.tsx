import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

declare global {
  interface Window {
    devToolsExtension: any;
  }
}

const loggerModdleware = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware, loggerModdleware),
    window.devToolsExtension ? window.devToolsExtension() : (f: any) => f
  )
);

export default store;
