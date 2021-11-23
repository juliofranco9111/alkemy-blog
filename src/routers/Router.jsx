import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { DetailsPage } from '../pages/DetailsPage';
import { ErrorPage } from '../pages/ErrorPage';
import { FormPostPage } from '../pages/FormPostPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

export const Router = () => {
  const dispatch = useDispatch();
  dispatch(startChecking());
  
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='post/:id' element={<DetailsPage />} />
      <Route path='post/create' element={<FormPostPage />} />
      <Route path='post/edit/:id' element={<FormPostPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};


