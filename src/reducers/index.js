// configure store here
import { combineReducers } from 'redux';
import { reducer as loadScreen } from './loadScreen';

const rootReducer = combineReducers({
  loadScreen,
});

export default rootReducer;
