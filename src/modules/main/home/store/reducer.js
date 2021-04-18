import * as types from './types';
import storage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const GET_CURRENT_WEATHER_INITIAL_STATE = {
  isLoading: false,
  isLoaded: false,
  failure: null,
  resource: null,
};

const getCurrentWeatherReducer = (
  state = GET_CURRENT_WEATHER_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case types.GET_CURRENT_WEATHER.LOAD:
      return {
        ...GET_CURRENT_WEATHER_INITIAL_STATE,
        isLoading: true,
        resource: state.resource,
      };
    case types.GET_CURRENT_WEATHER.SUCCESS:
      return {
        ...GET_CURRENT_WEATHER_INITIAL_STATE,
        isLoaded: true,
        resource: {...action.payload.resource, date: Date.now()},
      };
    case types.GET_CURRENT_WEATHER.FAILURE:
      return {
        ...GET_CURRENT_WEATHER_INITIAL_STATE,
        failure: action.payload.error,
        resource: state.resource,
      };

    default:
      return state;
  }
};

export const getCurrentWeatherReducerPersisted = persistReducer(
  {key: 'getCurrentWeatherReducer', storage},
  getCurrentWeatherReducer,
);
