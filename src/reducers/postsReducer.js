import { types } from '../types/types';

const initialState = {
  posts: [],
  loading: false,
  error: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.postsStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.postsFinishLoading:
      return {
        ...state,
        loading: false,
      };
    case types.postSetError:
      return {
        ...state,
        error: true,
      };
    case types.postClearError:
      return {
        ...state,
        error: false,
      };

    case types.postsSetAllPosts:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
