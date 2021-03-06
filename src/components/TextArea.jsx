import React from 'react';

export const TextArea = ({label='', onChange=()=>{},name='', value='', placeholder=''}) => {
  return (
    <>
      <label htmlFor='inputPassword' className='sr-only text-muted mt-3 mb-1'>
        {label}
      </label>
      <textarea
        className='form-control mb-4'
        id='textarea'
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value}
        name={name}></textarea>
    </>
  );
};
