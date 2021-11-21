import React, { useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { PostContainer } from '../components/PostContainer';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingPosts } from '../actions/posts';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!posts) {
      dispatch(startLoadingPosts());
      console.log('re fetch');
    }
  }, []);
  return (
    <>
      <NavBar />
      <Header />
      <PostContainer posts={posts}/>
    </>
  );
};
