import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import eventsReducer from './reducers/events';
import reservationsReducer from './reducers/reservations';
// import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    reservations: reservationsReducer,
    // user: userReducer,
  },
  middleware: [logger],
});

export default store;
