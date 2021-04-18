import {store} from './store';
export const initialize = () => {
  global.store = store;

  global.config = {};
};
