// @flow
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import TicTacToe from './modules/tictac';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <TicTacToe />
    </Provider>
  );
}

export default App;
