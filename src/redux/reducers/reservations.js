import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const reservationsSlice = createSlice({
  /* eslint no-param-reassign: 0 */
  name: 'reservations',
  initialState,
  reducers: {
    getReservations(state, action) {
      return action.payload;
    },
    addReservation(state, action) {
      return [...state, action.payload];
    },
    deleteReservation(state, action) {
      return state.filter((reservation) => reservation.id !== action.payload);
    },
  },
});

export const { getReservations, addReservation, deleteReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
