import React from 'react';

export const LoginPage = () => {
  return (
    <div className="container-center">
      <form className='form-signin'>
        <h1 className='h3 mb-3 font-weight-normal'>AlkemyBlog💻</h1>
        <label htmlFor='inputEmail' className='sr-only'>
          Email address
        </label>
        <input
          type='email'
          id='inputEmail'
          className='form-control'
          placeholder='Email address'
          required
          autofocus
        />
        <label htmlFor='inputPassword' className='sr-only'>
          Password
        </label>
        <input
          type='password'
          id='inputPassword'
          className='form-control'
          placeholder='Password'
          required
        />
        
        <button className='btn btn-primary btn-block' type='submit'>
          Sign in
        </button>
        <p className='mt-5 mb-3 text-muted'>Julio Franco</p>
      </form>
    </div>
  );
};
