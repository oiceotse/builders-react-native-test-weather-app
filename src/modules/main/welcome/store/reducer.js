import * as types from './types';
import storage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const SET_VIEWED_STATE = {
  hasViewed: false,
};

const setViewedReducer = (state = SET_VIEWED_STATE, action) => {
  switch (action.type) {
    case types.SET_VIEWED.SET:
      return {
        hasViewed: true,
      };
    default:
      return state;
  }
};

export const setViewedReducerPersisted = persistReducer(
  {key: 'setViewedReducer', storage},
  setViewedReducer,
);
