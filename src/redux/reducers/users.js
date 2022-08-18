import api from './api';

const initState = {
  user: {},
  signedIn: false,
  error: '',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      return {
        ...state,
        user: action.payload,
        signedIn: true,
        error: '',
      };
    case 'SIGN_OUT':
      return {
        initState,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SIGN_UP':
      return {
        ...state,
        user: action.payload,
        signedIn: true,
        error: '',
      };
    default:
      return state;
  }
};

export const signOut = (id) => async (dispatch) => {
  dispatch({
    type: 'SIGN_OUT',
    payload: id,
  });
};

export const signUp = (name) => async (dispatch) => {
  try {
    await api('users', 'POST', JSON.stringify({ name }))
      .then((user) => {
        if (user) dispatch({ type: 'SIGN_UP', payload: user });
        else dispatch({ type: 'ERROR', payload: 'Username already exists' });
      });
    return true;
  } catch (err) {
    dispatch({ type: 'ERROR', payload: err });
    return false;
  }
};

export const fetchUser = (name) => async (dispatch) => {
  await fetch('http://localhost:3000/api/v1/users')
    .then((response) => response.json())
    .then((list) => list.filter((user) => user.name === name))
    .then((data) => {
      if (data.length > 0) dispatch({ type: 'SIGNED_IN', payload: data[0] });
      else dispatch({ type: 'ERROR', payload: 'User not found' });
    })
    .catch(() => dispatch({ type: 'SIGNING_IN' }));
};

export default userReducer;
