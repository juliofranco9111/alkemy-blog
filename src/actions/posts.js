import { types } from '../types/types';
import { fetchAllPosts, fetchPost } from '../helpers/fetch';

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

export const setPostToEdit = (id) => ({
  type: types.postsSetPostToEdit,
  payload: id,
});

export const deletePostById = (id) => ({
  type: types.postsDeletePost,
  payload: id,
})

