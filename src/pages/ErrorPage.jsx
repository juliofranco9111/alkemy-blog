import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className='container-center'>
      <h1 className='h1'>404 | 😔</h1>
      <p className=''>Page not found</p>
      <Link to="/" className='btn btn-outline-primary'>
          Go home
      </Link>
    </div>
  );
};
