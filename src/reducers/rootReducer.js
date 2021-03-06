import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});
