import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FormCreateComponent } from '../components/FormCreateComponent';
import { FormEditComponent } from '../components/FormEditComponent';
import { NavBar } from '../components/NavBar';

export const FormPostPage = () => {
  const { pathname } = useLocation();
  const types = {
    edit: 'editForm',
    create: 'createForm',
  };
  const [type, setType] = useState(types.create);

  useEffect(() => {
    if (pathname.includes('edit')) {
      setType(types.edit);
    }
  }, []);

  return (
    <div className='mt-80'>
      <NavBar />
      {type === types.create ? <FormCreateComponent /> : <FormEditComponent />}
    </div>
  );
};
