import React from 'react'
import { useForm } from '../hooks/useForm'
import { InputText } from './InputText'
import { TextArea } from './TextArea'

export const FormCreateComponent = () => {

  const [values, handleInputChange] = useForm({ title:'', body:'' });

  const {title, body} = values;


    return (
        <form className='form-signin'>
        <h1 className='h1 mb-3 font-weight-normal'>Create a post✍</h1>
        <InputText label='Title' placeholder='A great title...' onChange={handleInputChange}/>
        <TextArea label='Body' placeholder='Type something...' onChange={handleInputChange}/>

        <button className='btn btn-primary btn-block' type='submit'>
          Create
        </button>

        <button className='btn btn-outline-light text-dark mt-3'>Volver</button>
      </form>
    )
}
