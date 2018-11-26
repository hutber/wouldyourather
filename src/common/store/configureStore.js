import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRootReducer from '../reducers';
import { routerMiddleware } from 'connected-react-router';

const configureStore = (preloadedState, history) => {
  const composeEnhancer = typeof window === 'object' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  //Setup production exclusive of certain middleware
  let middleware = [thunk, routerMiddleware(history)];
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger({ predicate: () => typeof document !== 'undefined' })];
  }

  const store = createStore(createRootReducer(history), preloadedState, composeEnhancer(applyMiddleware(...middleware)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
