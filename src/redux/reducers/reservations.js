import api from './api';

const initState = {
  reservations: [],
};

const reservationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING_RESERVATION':
      return {
        ...state,
        loaded: true,
      };
    case 'COMPLETE_RESERVATION':
      return { reservations: action.payload };
    default:
      return state;
    case 'DELETE_RESERVATION':
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== Number(action.payload),
        ),
      };
    case 'ADD_RESERVATION':
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
  }
};

export const deleteReservation = (id) => async (dispatch) => {
  try {
    await api(`reservations/${id}`, 'DELETE', '');
    dispatch({
      type: 'DELETE_RESERVATION',
      payload: id,
    });
    return true;
  } catch (err) {
    return err;
  }
};

export const addEvent = (event) => async (dispatch) => {
  try {
    await api('events', 'POST', JSON.stringify(event));
    dispatch({
      type: 'ADD_EVENT',
      payload: event,
    });
    return true;
  } catch (err) {
    return err;
  }
};

export const fetchReservation = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_RESERVATION' });
  await fetch('http://localhost:3000/api/v1/reservations')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'COMPLETE_RESERVATION', payload: data });
    })
    .catch(() => dispatch({ type: 'FETCHING_RESERVATION' }));
};

export default reservationReducer;
