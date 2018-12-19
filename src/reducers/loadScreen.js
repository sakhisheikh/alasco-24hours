/* eslint-disable */
import { REQUEST_LOAD_SCREEN } from '../actions/types';

export function reducer(state = {
  loadScreen: ''
}, action = { type: '' }) {
  switch (action.type) {
    case REQUEST_LOAD_SCREEN:
      return {
        ...state,
        loadScreen: action.payload.loadScreen,
      };
    default:
      return state;
  }
}
