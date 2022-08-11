import { createSlice } from '@reduxjs/toolkit';

const initialState = ['test'];

const eventsSlice = createSlice({
  /* eslint no-param-reassign: 0 */
  name: 'events',
  initialState,
  reducers: {
    getEvents(state, action) {
      state = action.payload;
    },
    addEvent(state, action) {
      state = [...state, action.payload];
    },
    deleteEvent(state, action) {
      state = state.filter(
        (event) => event.id !== action.payload,
      );
    },
  },
});

export const { getEvents, addEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
