import { types } from '../types/types';
import { fetchAuth } from '../helpers/fetch';

export const startLogin = (user) => {
  return async (dispatch) => {
    dispatch(startLoading());
    const resp = await fetchAuth(user);
    const {token} = await resp.json();
    if (token) {
      dispatch(clearError());
      localStorage.setItem('token', token);
      dispatch(
        login({
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

  if (token) {
    return (dispatch) => {
      dispatch(startLoading());
      dispatch(
        login({
          token,
        })
      );
    };
  } else {
    return (dispatch) => {
      dispatch(logout());
      dispatch(stopLoading());
    };
  }
};

export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
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
