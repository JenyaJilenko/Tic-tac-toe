// @flow
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import TicTac from './containers/TicTac';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <TicTac />
    </Provider>
  );
}

export default App;
