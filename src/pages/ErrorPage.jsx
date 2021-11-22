import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = ({msg='Page not found'}) => {
  return (
    <div className='container-center-login'>
      <h1 className='h1'>404 | 😔</h1>
      <p>{msg}</p>
      <Link to="/" className='btn btn-outline-primary'>
          Go home
      </Link>
    </div>
  );
};
