import * as types from './types';

export const getCurrentWeatherAction = {
  load: () => ({type: types.GET_CURRENT_WEATHER.LOAD}),
  success: resource => ({
    type: types.GET_CURRENT_WEATHER.SUCCESS,
    payload: {resource},
  }),
  failure: error => ({
    type: types.GET_CURRENT_WEATHER.FAILURE,
    payload: {error},
  }),
};
