import { combineReducers } from 'redux';
import listsReducer from './listsReducers'

export default combineReducers({
  lists: listsReducer
});