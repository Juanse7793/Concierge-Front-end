// import { createSlice } from '@reduxjs/toolkit';

const initState = {
  events: [],
};

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING_EVENT':
      return {
        ...state,
        loaded: true,
      };
    case 'COMPLETE_EVENT':
      return { events: action.payload };
    default:
      return state;
  }
};

// const eventsSlice = createSlice({
//   /* eslint no-param-reassign: 0 */
//   name: 'events',
//   initialState,
//   reducers: {
//     getEvents(state, action) {
//       return action.payload;
//     },
//     addEvent(state, action) {
//       return [...state, action.payload];
//     },
//     deleteEvent(state, action) {
//       return state.filter((event) => event.id !== action.payload);
//     },
//   },
// });

export const fetchEvent = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_EVENT' });
  await fetch('http://localhost:3000/api/v1/events')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'COMPLETE_EVENT', payload: data });
    })
    .catch(() => dispatch({ type: 'FETCHING_EVENT' }));
};

export default eventReducer;
// export const { getEvents, addEvent, deleteEvent } = eventsSlice.actions;
// export default eventsSlice.reducer;
