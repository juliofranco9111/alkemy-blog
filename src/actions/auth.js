import { types } from '../types/types';
import { fetchAuth } from '../helpers/fetch';

export const startLogin = (user) => {
  return async (dispatch) => {
    dispatch(startLoading());
    const resp = await fetchAuth(user);
    const {token} = await resp.json();
    if (token) {
      dispatch(clearError());
      console.log('token');
      localStorage.setItem('token', token);
      dispatch(
        login({
          email: user.email,
          token,
        })
      );
      dispatch(stopLoading());
    } else {
      dispatch(setError());
      dispatch(stopLoading());
    }
  };
};

export const startChecking = () => {
  const token = localStorage.getItem('token') || null;
  const email = localStorage.getItem('email') || null;

  if (token && email) {
    return (dispatch) => {
      dispatch(startLoading());
      dispatch(
        login({
          email,
          token,
        })
      );
    };
  } else {
    return (dispatch) => {
      dispatch(stopLoading());
    };
  }
};

export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    dispatch(logout());
  };
};

const login = (token) => ({
  type: types.authLogin,
  payload: token,
});

const startLoading = () => ({
  type: types.authStartLoading,
});

const stopLoading = () => ({ type: types.authStopLoading });

const logout = () => ({ type: types.authLogout });

const setError = () => ({ type: types.authSetError });
const clearError = () => ({ type: types.authClearError });
