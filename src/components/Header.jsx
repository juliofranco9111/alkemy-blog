import React from 'react';
import { useParams } from 'react-router-dom';

export const Header = ({ title = 'Alkemy Blog', subtitle }) => {

  const params = useParams();
  const { id } = params;

  


  return (
    <header className='masthead bg-dark'>
      <div className='container position-relative px-4 px-lg-5'>
        <div className='row gx-4 gx-lg-5 justify-content-center'>
          <div className='col-md-10 col-lg-8 col-xl-7'>
            <div className='site-heading'>
              {id ? <h2 className='text-white'>{title}</h2> : <h1 className='text-white'>{title}</h1>}
              {subtitle && <span className='subheading'>{subtitle}</span>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
