import { combineReducers } from 'redux';
import blogReducer from './reducers/BlogReducer';
import userReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
  blogReducer,
  userReducer
});

export default rootReducer;
