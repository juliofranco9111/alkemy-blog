import React from 'react'
import { createPost } from '../helpers/fetch'
import { useForm } from '../hooks/useForm'
import { InputText } from './InputText'
import { TextArea } from './TextArea'

export const FormCreateComponent = () => {

  const [values, handleInputChange] = useForm({ title:'', body:'' });

  const {title, body} = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const res = await createPost(values);
    if(res.status === 201) {
      console.log('Post creado');
    }
  }



    return (
        <form className='form-signin' onSubmit={handleSubmit}>
        <h1 className='h1 mb-3 font-weight-normal'>Create a post✍</h1>
        <InputText label='Title' placeholder='A great title...' name='title' value={title} onChange={handleInputChange}/>
        <TextArea label='Body' placeholder='Type something...' name='body' value={body} onChange={handleInputChange}/>

        <button className='btn btn-primary btn-block' type='submit'>
          Create
        </button>

        <button className='btn btn-outline-light text-dark mt-3'>Volver</button>
      </form>
    )
}
