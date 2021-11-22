import { types } from '../types/types';

const initialState = {
  posts: null,
  loading: false,
  error: false,
  toEdit: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.postsStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.postsStopLoading:
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

    case types.postsSetPostToEdit:
      const post =
        state.posts.filter((post) => post.id === action.payload)[0] || null;
      return {
        ...state,
        toEdit: post,
      };

    case types.postsDeletePost:
      const newPosts = state.posts.filter((post) => post.id !== action.payload);
      return {
        ...state,
        posts: newPosts,
      };

    default:
      return state;
  }
};
