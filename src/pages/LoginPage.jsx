import React from 'react';

export const LoginPage = () => {
  return (
    <div className="container-center-login">
      <form className='form-signin'>
        <h1 className='h1 mb-3 font-weight-normal'>AlkemyBlog 💻</h1>
        <label htmlFor='inputEmail' className='sr-only text-muted mb-2'>
          Email
        </label>
        <input
          type='email'
          id='inputEmail'
          className='form-control'
          placeholder='example@example.com'
          autocomplete='off'
          required
          autofocus
        />
        <label htmlFor='inputPassword' className='sr-only text-muted mb-2'>
          Password
        </label>
        <input
          type='password'
          id='inputPassword'
          className='form-control'
          placeholder='Your password'
          required
        />
        
        <button className='btn btn-primary btn-block' type='submit'>
          Sign in
        </button>
        <p className='mt-5 mb-3 text-muted'> - Julio Franco - </p>
      </form>
    </div>
  );
};
