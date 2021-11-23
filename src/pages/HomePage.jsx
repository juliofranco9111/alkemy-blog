import React, { useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { PostContainer } from '../components/PostContainer';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingPosts } from '../actions/posts';
import { Loading } from '../components/Loading';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
  const { userAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const subtitle = 'A WarmUp challenge for React Acceleration';

  useEffect(() => {
    if (!userAuth) {
      navigate('login');
    }

    if (!posts) {
      dispatch(startLoadingPosts());
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
