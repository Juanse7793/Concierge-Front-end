import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

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
