import * as actions from './actions';

export const setViewed = () => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(actions.setViewedAction.setViewed());
    resolve(true);
  });
};
