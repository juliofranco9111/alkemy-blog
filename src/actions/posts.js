import { types } from '../types/types';
import { fetchAllPosts } from '../helpers/fetch';

export const startLoadingPosts = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    const resp = await fetchAllPosts();
    const posts = await resp.json();
    //dispatch(finishLoading());
    dispatch(setPosts(posts));
  };
};

const startLoading = () => ({
  type: types.postsStartLoading,
});

const finishLoading = () => ({
    type: types.postsFinishLoading,
});

const setPosts = (posts) => ({
    type: types.postsSetAllPosts,
    payload: posts,
});