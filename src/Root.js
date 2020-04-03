import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store/configureStore';

const store = configureStore();
function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
