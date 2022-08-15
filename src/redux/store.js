import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import eventsReducer from './reducers/events';
// import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    // user: userReducer,
  },
  middleware: [logger],
});

export default store;
