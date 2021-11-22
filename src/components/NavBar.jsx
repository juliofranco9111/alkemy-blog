import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
    navigate('/login');
  };

  return (
    <nav className='navbar navbar-expand-lg nabvar-dark bg-dark' id='mainNav'>
      <div className='container px-4 px-lg-5'>
        <Link to='/' className='navbar-brand text-white'>
          AlkemyBlog
        </Link>
        <button
          className='navbar-toggler text-white'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          Menu
          <i className='fas fa-bars'></i>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto py-4 py-lg-0'>
            <li className='nav-item'>
              <Link to='/' className='nav-link px-lg-3 py-3 py-lg-4 text-white'>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/post/create'
                className='nav-link px-lg-3 py-3 py-lg-4 text-white'>
                New Post
              </Link>
            </li>
            <li className='nav-item'>
              <a
                onClick={handleLogout}
                className='nav-link px-lg-3 py-3 py-lg-4 text-white pointer'>
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
