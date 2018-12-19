import { REQUEST_LOAD_SCREEN } from './types';

export default (loadScreen = false) => {
  return {
    type: REQUEST_LOAD_SCREEN,
    payload: {
      loadScreen,
    },
  };
};
