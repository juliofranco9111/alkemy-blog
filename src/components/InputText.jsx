import React from 'react';

export const InputText = ({label='', value='', onChange = ()=>{}, name='', placeholder=''}) => {
  return (
    <>
      <label htmlFor='inputEmail' className='mb-1 text-muted'>
        {label}
      </label>
      <input
        type='text'
        id='inputEmail'
        required
        name={name}
        autoFocus
        value={value}
        onChange={onChange}
        className='form-control'
        placeholder={placeholder}
        autoComplete='off'
      />
    </>
  );
};
