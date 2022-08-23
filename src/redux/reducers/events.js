import api, { apiUrl } from './api';

const initState = {
  events: [],
};

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING_EVENT':
      return {
        ...state,
        loading: true,
      };
    case 'COMPLETE_EVENT':
      return { events: action.payload };
    default:
      return state;
    case 'DELETE_EVENT': {
      const user = JSON.parse(sessionStorage.getItem('user'));
      const newReservations = user.reservations.filter(
        (reservation) => reservation.id !== Number(action.payload),
      );
      sessionStorage.setItem(
        'user',
        JSON.stringify({ ...user, reservations: newReservations }),
      );
      return {
        ...state,
        events: state.events.filter((event) => event.id !== Number(action.payload)),
      };
    }
    case 'ADDING_EVENT':
      return {
        ...state,
        adding: false,
      };
    case 'ADD_EVENT':
      return {
        ...state,
        adding: true,
        events: [...state.events, action.payload],
      };
  }
};

export const fetchEvents = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_EVENT' });
  await api('events', 'GET')
    .then((data) => {
      dispatch({ type: 'COMPLETE_EVENT', payload: data });
    })
    .catch(() => dispatch({ type: 'FETCHING_EVENT' }));
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    await api(`events/${id}`, 'DELETE');
    dispatch({
      type: 'DELETE_EVENT',
      payload: id,
    });
    return true;
  } catch (err) {
    return err;
  }
};

export const addEvent = (event) => async (dispatch) => {
  try {
    dispatch({ type: 'ADDING_EVENT' });
    await fetch(`${apiUrl}events`, { method: 'POST', body: event });
    dispatch({
      type: 'ADD_EVENT',
      payload: event,
    });
    return true;
  } catch (err) {
    return err;
  }
};

export default eventReducer;
