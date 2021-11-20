import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startLogin } from '../actions/auth';
import { validate } from '../helpers/validate';
import { useForm } from '../hooks/useForm';

export const LoginPage = () => {
  const { userAuth, checking, error } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange] = useForm({
    email: 'challenge@alkemy.org',
    password: '',
  });

  const { email, password } = values;

  useEffect(() => {
    if (userAuth) {
      navigate('/');
    }
  }, [userAuth]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    validate(values, setErrors);
    if (errors !== null) {
      return;
    }

    dispatch(startLogin({ email: values.email, password: values.password }));
  };

  return (
    <div className='container-center-login'>
      <h1 className='h1 mb-3 font-weight-normal'>AlkemyBlog 💻</h1>
      <form className='form-signin' onSubmit={handleSubmit}>
        <label htmlFor='inputEmail' className='sr-only text-muted mb-2'>
          Email
        </label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleInputChange}
          id='inputEmail'
          className='form-control'
          placeholder='example@example.com'
          autoComplete='off'
          required
          autoFocus
        />
        <label htmlFor='inputPassword' className='sr-only text-muted mb-2'>
          Password
        </label>
        <input
          type='password'
          id='inputPassword'
          name='password'
          value={password}
          onChange={handleInputChange}
          className='form-control'
          placeholder='Your password'
          required
        />

        <button className='btn mb-4 btn-primary btn-block' type='submit'>
          {!checking ? 'Sign in' : 'Loading...'}
        </button>
        {error && (
          <div className='alert alert-danger' role='alert'>
            The credentials you entered are incorrect.
          </div>
        )}
      </form>
        
    </div>
  );
};
