import { types } from '../types/types';
import { fetchAllPosts } from '../helpers/fetch';

export const startLoadingPosts = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    const resp = await fetchAllPosts();
    const posts = await resp.json();
    dispatch(setPosts(posts));
    dispatch(finishLoading());
  };
};

const startLoading = () => ({
  type: types.postsStartLoading,
});

const finishLoading = () => ({
    type: types.postsStopLoading,
});

const setPosts = (posts) => ({
    type: types.postsSetAllPosts,
    payload: posts,
});