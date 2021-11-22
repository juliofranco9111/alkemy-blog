import { types } from '../types/types';

const initialState = {
  userAuth: false,
  checking: false,
  error: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        userAuth: true,
        checking: false,
      };

    case types.authStartLoading:
      return { ...state, checking: true };
    case types.authStopLoading:
      return { ...state, checking: false };

    case types.authLogout:
      return {
        ...state,
        userAuth: false,
        checking: false,
      };

    case types.authSetError:
      return { ...state, error: true };
    case types.authClearError:
      return { ...state, error: false };

    default:
      return state;
  }
};
