// @flow
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import loggerMiddleware from './loggerMiddleware';

import BoardSaga from '../containers/sagas';

export default (initialState: Object = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    loggerMiddleware,
    sagaMiddleware,
  ];
  const store = createStore((rootReducer: Object), initialState, compose(applyMiddleware(...middlewares)));

  sagaMiddleware.run(BoardSaga);

  return store;
};
