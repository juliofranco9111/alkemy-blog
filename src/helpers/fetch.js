const URLAuth = 'http://challenge-react.alkemy.org/';
const URLPost = 'https://jsonplaceholder.typicode.com/posts';


export const fetchAuth = (user) => {
  return fetch(URLAuth, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  }).then(res => res)
};

export const fetchAllPosts = () => {
  return fetch(URLPost, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res)
}

export const fetchPost = (id) => {
  return fetch(`${URLPost}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res)
}

export const editPost = (id) => {
  return fetch(`${URLPost}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    
  }).then(res => res)
}

export const deletePost = (id) => {
  return fetch(`${URLPost}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res)
}