import React from 'react';
import { Link } from 'react-router-dom';

export const BlogPost = ({ content }) => {
  const users = [
    {
      id: 1,
      name: 'Leanne Graham',
    },
    {
      id: 2,
      name: 'Ervin Howell',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
    },
  ];

  const { title, userId, id } = content;
  return (
    <>
      <div className='post-preview'>
        <Link to={`post/${id}`}>
          <h2 className='post-title'>{title}</h2>
        </Link>
        <p className='post-meta'>
          Posted by
          <a href='#!'> {users[userId - 1].name} </a>
          on September 24, 2021
        </p>
      </div>
      <hr className='my-4' />
      
    </>
  );
};
