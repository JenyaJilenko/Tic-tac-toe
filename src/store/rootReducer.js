// @flow
import { combineReducers } from 'redux';

import BoardReducer from '../containers/reducer';

export const rootReducer = combineReducers({
  board: BoardReducer,
});

