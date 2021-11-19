import React from 'react';

export const BlogPost = ({content}) => {
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

  const {title, userId} = content;
  return (
    <>
      <div className='post-preview'>
        <a href='post.html'>
          <h2 className='post-title'>
            {title}
          </h2>
          {/* <h3 className='post-subtitle'>
            Problems look mighty small from 150 miles up
          </h3> */}
        </a>
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
