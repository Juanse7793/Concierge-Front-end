import api from './api';

const initState = {
  user: {},
  signedIn: false,
  error: '',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      sessionStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        signedIn: true,
        error: '',
      };
    case 'SIGN_OUT':
      sessionStorage.removeItem('user');
      return {
        initState,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SIGN_UP':
      sessionStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        signedIn: true,
        error: '',
      };
    case 'DELETE_RESERVATION': {
      const newReservations = state.user.reservations.filter(
        (reservation) => reservation.id !== Number(action.payload),
      );
      sessionStorage.setItem(
        'user',
        JSON.stringify({ ...state.user, reservations: newReservations }),
      );
      return {
        ...state,
        user: {
          ...state.user,
          reservations: newReservations,
        },
      };
    }
    case 'ADD_RESERVATION': {
      const newReservations = [...state.user.reservations, action.payload];
      sessionStorage.setItem(
        'user',
        JSON.stringify({ ...state.user, reservations: newReservations }),
      );
      return {
        ...state,
        user: {
          ...state.user,
          reservations: newReservations,
        },
      };
    }
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

export const signIn = (name) => async (dispatch) => {
  await api('users', 'GET')
    .then((list) => list.filter((user) => user.name === name))
    .then((data) => {
      if (data.length > 0) dispatch({ type: 'SIGNED_IN', payload: data[0] });
      else dispatch({ type: 'ERROR', payload: 'User not found' });
    })
    .catch(() => dispatch({ type: 'SIGNING_IN' }));
};

export const deleteReservation = (id1, id2) => async (dispatch) => {
  try {
    await api(`users/${id1}/reservations/${id2}`, 'DELETE');
    dispatch({
      type: 'DELETE_RESERVATION',
      payload: id2,
    });
    return true;
  } catch (err) {
    return err;
  }
};

export const addReservation = (id, reservation) => async (dispatch) => {
  try {
    await api(`users/${id}/reservations`, 'POST', JSON.stringify(reservation));
    dispatch({
      type: 'ADD_RESERVATION',
      payload: { ...reservation },
    });
    return true;
  } catch (err) {
    return err;
  }
};

export default userReducer;
