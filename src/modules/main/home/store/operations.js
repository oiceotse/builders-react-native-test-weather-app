import * as actions from './actions';
import * as services from '../services';
import * as helpers from '../../../../helpers';

export const getCurrentWeather = () => dispatch => {
  return new Promise(async (resolve, reject) => {
    dispatch(actions.getCurrentWeatherAction.load());
    helpers
      .getCurrentLocation()
      .then(location => {
        services.ApiWeather.getWeatherData(location)
          .then(async res => {
            if (res.ok) {
              const response = await res.json();
              resolve(response);
              dispatch(actions.getCurrentWeatherAction.success(response));
            } else {
              reject(res);
              dispatch(actions.getCurrentWeatherAction.failure(res));
            }
          })
          .catch(err => {
            reject(err);
            dispatch(actions.getCurrentWeatherAction.failure(err));
          });
      })
      .catch(err => {
        reject(err);
      });
  });
};
