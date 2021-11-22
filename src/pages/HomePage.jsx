import React, { useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { PostContainer } from '../components/PostContainer';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingPosts } from '../actions/posts';
import { Loading } from '../components/Loading';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  const subtitle = 'A WarmUp challenge for React Acceleration';

  useEffect(() => {
    if (!posts) {
      dispatch(startLoadingPosts());
      console.log('re fetch');
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <Header subtitle={subtitle} />
      <PostContainer posts={posts} />
    </>
  );
};
