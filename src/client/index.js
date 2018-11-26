import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';
import App from '../common/containers/App';
import history from '../common/history';

const store = configureStore(window.__PRELOADED_STATE__, history);

hydrate(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('../common/containers/App', () => {
    hydrate(
      <Provider store={store}>
        <App history={history} />
      </Provider>,
      document.getElementById('root')
    );
  });
}
