import { combineReducers } from 'redux';
import { projectsReducer } from './projectsReducer';
import { singleProjectReducer } from './singleProjectReducer';

export default combineReducers({
  projectsReducer,
  singleProjectReducer
});
