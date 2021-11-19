import React from 'react';
import { NavBar } from '../components/NavBar';

export const FormPostPage = () => {
  return (
    <>
      <NavBar />
      <div className='container-center'>
        <form className='form-signin'>
          <h1 className='h1 mb-3 font-weight-normal'>Edit a post✍</h1>
          <label htmlFor='inputEmail' className='mb-1 text-muted'>
            Title
          </label>
          <input
            type='text'
            id='inputEmail'
            className='form-control'
            placeholder='A great title...'
            autocomplete='off'
          />
          <label htmlFor='inputPassword' className='sr-only text-muted mt-3 mb-1'>
            Body
          </label>
          <textarea className='form-control mb-4' id='textarea' name='body'></textarea>

          <button className='btn btn-primary btn-block' type='submit'>
            Enviar
          </button>

          <button className='btn btn-outline-light text-dark mt-3'>Volver</button>
        </form>
      </div>
    </>
  );
};
