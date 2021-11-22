import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { NavBar } from '../components/NavBar';
import { fetchPost } from '../helpers/fetch';

export const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({ title: null, body: null, loading: true });

  useEffect(() => {
    const fetchPostData = async () => {
      const res = await fetchPost(id);
      const { title, body } = await res.json();

      console.log(title, '+++++', body);

      setPost({ title, body, loading: false });
    };

    fetchPostData();
  }, []);

  if (post.loading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <Header title={post.title} />
      <main className='mb-4'>
        <div className='container px-4 px-lg-5'>
          <div className='row gx-4 gx-lg-5 justify-content-center'>
            <div className='col-md-10 col-lg-8 col-xl-7'>
              <p>{post.body}</p>
              <p>{post.body}</p>
              <hr />
              <div className='d-flex gap-2 justify-content-end mb-4'>
                <button
                  onClick={() => navigate(-1)}
                  className='btn btn-primary text-uppercase'>
                  ← Go home
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
