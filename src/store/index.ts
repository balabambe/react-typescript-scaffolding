import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import ThunkMiddleware from 'redux-thunk';

import appReducer from './app';
import postReducer from './post';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  app: appReducer,
  post: postReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(ThunkMiddleware), devToolsEnhancer({}))
  /* preloadedState, */
);

export default store;
