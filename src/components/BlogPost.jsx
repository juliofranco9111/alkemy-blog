import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deletePostById, setPostToEdit } from '../actions/posts';
import { deletePost } from '../helpers/fetch';
import { users } from '../helpers/users';

export const BlogPost = ({ content }) => {
  const { title, userId, id } = content;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    dispatch(setPostToEdit(id));
    navigate(`/post/edit/${id}`);
  };

  const handleDelete = async () => {
    const res = await deletePost(id);
    if (res.status === 200) {
      dispatch(deletePostById(id));
    }
  };

  return (
    <>
      <div className='post-preview'>
        <Link to={`post/${id}`}>
          <h2 className='post-title'>{title}</h2>
        </Link>
        <p className='post-meta'>
          Posted by
          <strong> {users[userId - 1].name} </strong>
          on September 24, 2021
        </p>
        <div className='d-flex gap-2 justify-content-end mb-4'>
          <button
            onClick={handleDelete}
            className='btn btn-outline-danger text-uppercase'>
            Delete
          </button>
          <button
            onClick={handleEdit}
            className='btn btn-primary text-uppercase'>
            Edit
          </button>
        </div>
      </div>
      <hr className='my-4' />
    </>
  );
};
