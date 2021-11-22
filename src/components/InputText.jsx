import React from 'react';

export const InputText = ({label='', value='', onChange = ()=>{}, placeholder=''}) => {
  return (
    <>
      <label htmlFor='inputEmail' className='mb-1 text-muted'>
        {label}
      </label>
      <input
        type='text'
        id='inputEmail'
        name={value}
        value={value}
        onChange={onChange}
        className='form-control'
        placeholder={placeholder}
        autoComplete='off'
      />
    </>
  );
};
