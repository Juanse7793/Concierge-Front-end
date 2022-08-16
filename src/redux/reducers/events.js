import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'event1',
    id: 1,
    location: 'loc',
    image: '/images/carrington_event.jpg',
    price: 234,
    start: '2022-08-01',
    end: '2022-08-01',
    reserved: false,
  },
  {
    name: 'event2',
    id: 2,
    location: 'loc',
    image: '/images/musical_festival.jpg',
    price: 234,
    start: '2022-08-01',
    end: '2022-08-05',
    reserved: false,
  },
  {
    name: 'event3',
    id: 3,
    location: 'loc',
    image: '/images/manchester-international-festival.jpg',
    price: 234,
    start: '2022-08-01',
    end: '2022-08-07',
    reserved: true,
  },
  {
    name: 'event4',
    id: 4,
    location: 'loc',
    image: '/images/carrington_event.jpg',
    price: 234,
    start: '2022-08-01',
    end: '2022-08-19',
    reserved: true,
  },
  {
    name: 'event5',
    id: 5,
    location: 'loc',
    image: '/images/musical_festival.jpg',
    price: 234,
    start: '2022-07-15',
    end: '2022-08-15',
    reserved: true,
  },
];

const eventsSlice = createSlice({
  /* eslint no-param-reassign: 0 */
  name: 'events',
  initialState,
  reducers: {
    getEvents(state, action) {
      return action.payload;
    },
    addEvent(state, action) {
      return [...state, action.payload];
    },
    deleteEvent(state, action) {
      return state.filter((event) => event.id !== action.payload);
    },
  },
});

export const { getEvents, addEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
