import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'event1',
    id: 1,
    location: 'loc',
    image: '/images/carrington_event.jpg',
    price: 234,
    start: Date.now() - 24,
    end: Date.now(),
  },
  {
    name: 'event2',
    id: 2,
    location: 'loc',
    image: '/images/musical_festival.jpg',
    price: 234,
    start: Date.now() - 24,
    end: Date.now(),
  },
  {
    name: 'event3',
    id: 3,
    location: 'loc',
    image: '/images/manchester-international-festival.jpg',
    price: 234,
    start: Date.now() - 24,
    end: Date.now(),
  },
  {
    name: 'event4',
    id: 4,
    location: 'loc',
    image: '/images/carrington_event.jpg',
    price: 234,
    start: Date.now() - 24,
    end: Date.now(),
  },
  {
    name: 'event5',
    id: 5,
    location: 'loc',
    image: '/images/musical_festival.jpg',
    price: 234,
    start: Date.now() - 24,
    end: Date.now(),
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
