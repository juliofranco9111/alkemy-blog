import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { fetchPost } from '../helpers/fetch';

export const DetailsPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState({ title: null, body: null, loading: true});

  useEffect(() => {
    const fetchPostData = async () => {
      const res = await fetchPost(id);
      const { title, body } = await res.json();

      console.log(title,'+++++', body);

      setPost({ title, body, loading: false });
    };

    fetchPostData();
  }, []);

  return (    
    <>
      <NavBar />
      <Header title={post.title}/>
      <main className='mb-4'>
        <div className='container px-4 px-lg-5'>
          <div className='row gx-4 gx-lg-5 justify-content-center'>
            <div className='col-md-10 col-lg-8 col-xl-7'>
              <p>
                {post.body}
              </p>
              <p>
                {post.body}
              </p>
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
