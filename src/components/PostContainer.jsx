import React, { useEffect, useState } from 'react';
import { BlogPost } from './BlogPost';

export const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setPosts(data);
  };

  

  //const posts = [1,2,3,4,5,6,7,8,9]
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className='container px-4 px-lg-5'>
      <div className='row gx-4 gx-lg-5 justify-content-center'>
        <div className='col-md-10 col-lg-8 col-xl-7'>
          {posts ? (
            posts.map((post) => <BlogPost content={post} key={post.id} />)
          ) : (
            <h1>Loading...</h1>
          )}
          <div className='d-flex justify-content-end mb-4'>
            <a className='btn btn-primary text-uppercase' href='#!'>
              Older Posts →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
