import React from 'react';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { PostContainer } from '../components/PostContainer';
export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <PostContainer />
    </>
  );
};
