import api from './api';

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
    case 'DELETE_EVENT':
      return {
        ...state,
        events: state.events.filter((event) => event.id !== Number(action.payload)),
      };
    case 'ADD_EVENT':
      return {
        ...state,
        events: [...state.events, action.payload],
      };
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    await api(`events/${id}`, 'DELETE', '');
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

export const fetchEvents = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_EVENT' });
  await fetch('http://localhost:3000/api/v1/events')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'COMPLETE_EVENT', payload: data });
    })
    .catch(() => dispatch({ type: 'FETCHING_EVENT' }));
};

export default eventReducer;
