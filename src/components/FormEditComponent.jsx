import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editPost } from '../helpers/fetch';
import { useForm } from '../hooks/useForm';
import { ErrorPage } from '../pages/ErrorPage';
import { InputText } from './InputText';
import { TextArea } from './TextArea';
import { updatePostById } from '../actions/posts';

export const FormEditComponent = () => {
  const navigate = useNavigate();
  const { toEdit: post, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const { userId } = post;

  useEffect(() => {
    if (!posts) {
      console.log('The post does not exist');
      navigate('/');
    }
  }, []);

  if (!post) {
    return <ErrorPage msg='The post you specified is not available' />;
  }

  const [values, handleInputChange] = useForm({
    title: post.title,
    body: post.body,
  });
  const { title, body } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const res = await editPost(post.id, { ...values, userId });
    const postUpdated = await res.json();
    console.log(postUpdated);
    if (res.status === 200) {
      dispatch(updatePostById(postUpdated));
      navigate(-1);
    }
  };

  const handleNavigateBack = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(-1);
  };

  return (
    <form className='form-signin' onSubmit={handleSubmit}>
      <h1 className='h1 mb-3 font-weight-normal'>Edit a post✍</h1>

      <InputText
        label='Title'
        name='title'
        value={title}
        onChange={handleInputChange}
      />
      <TextArea
        label='Body'
        name='body'
        value={body}
        onChange={handleInputChange}
      />

      <button className='btn btn-primary btn-block' type='submit'>
        Confirm
      </button>

      <button
        onClick={handleNavigateBack}
        className='btn btn-outline-light text-dark mt-3'>
        Volver
      </button>
    </form>
  );
};
