import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'event1',
    id: 1,
    location: 'loc',
    image: '/images/carrington_event.jpg',
    price: 234,
    start: '22 September 2021',
    end: '27 September 2021',
    reserved: false,
  },
  {
    name: 'event2',
    id: 2,
    location: 'loc',
    image: '/images/musical_festival.jpg',
    price: 234,
    start: '22 September 2021',
    end: '27 September 2021',
    reserved: false,
  },
  {
    name: 'event3',
    id: 3,
    location: 'loc',
    image: '/images/manchester-international-festival.jpg',
    price: 234,
    start: '22 September 2021',
    end: '27 September 2021',
    reserved: true,
  },
  {
    name: 'event4',
    id: 4,
    location: 'loc',
    image: '/images/carrington_event.jpg',
    price: 234,
    start: '22 September 2021',
    end: '27 September 2021',
    reserved: true,
  },
  {
    name: 'event5',
    id: 5,
    location: 'loc',
    image: '/images/musical_festival.jpg',
    price: 234,
    start: '22 September 2021',
    end: '27 September 2021',
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
