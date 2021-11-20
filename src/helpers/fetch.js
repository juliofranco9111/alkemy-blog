const URLAuth = 'http://challenge-react.alkemy.org/';
const URLPost = 'https://www.superheroapi.com/api.php/10224541060347055/';


export const fetchAuth = (user) => {
  return fetch(URLAuth, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  }).then(res => res)
};