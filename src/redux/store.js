import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './reducers/events';
// import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    // user: userReducer,
  },
});

export default store;
