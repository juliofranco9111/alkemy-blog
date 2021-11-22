import React from 'react';
import { BlogPost } from './BlogPost';

export const PostContainer = ({ posts }) => {
  return (
    <div className='container px-4 px-lg-5'>
      <div className='row gx-4 gx-lg-5 justify-content-center'>
        <div className='col-md-10 col-lg-8 col-xl-7'>
          {posts ? (
            posts.map((post) => <BlogPost content={post} key={post.id} />)
          ) : (
            <h1>Posts not found</h1>
          )}
        </div>
      </div>
    </div>
  );
};
