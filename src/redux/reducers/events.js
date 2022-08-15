import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'event1',
    id: 1,
    location: 'loc',
    image: '/images/carrington_event.jpg',
    price: 234,
    start: new Date(2022, 8, 1),
    end: new Date(2022, 8, 5),
    reserved: false,
  },
  {
    name: 'event2',
    id: 2,
    location: 'loc',
    image: '/images/musical_festival.jpg',
    price: 234,
    start: new Date(2022, 8, 1),
    end: new Date(2022, 8, 3),
    reserved: false,
  },
  {
    name: 'event3',
    id: 3,
    location: 'loc',
    image: '/images/manchester-international-festival.jpg',
    price: 234,
    start: new Date(2022, 8, 10),
    end: Date.now(),
    reserved: true,
  },
  {
    name: 'event4',
    id: 4,
    location: 'loc',
    image: '/images/carrington_event.jpg',
    price: 234,
    start: new Date(2022, 8, 1),
    end: new Date(2022, 8, 6),
    reserved: true,
  },
  {
    name: 'event5',
    id: 5,
    location: 'loc',
    image: '/images/musical_festival.jpg',
    price: 234,
    start: new Date(2022, 8, 1),
    end: new Date(2022, 8, 2),
    reserved: true,
  },
];

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
      state = state.filter((event) => event.id !== action.payload);
    },
  },
});

export const { getEvents, addEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
