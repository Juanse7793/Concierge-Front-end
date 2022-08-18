import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import eventReducer, { fetchEvent } from './reducers/events';
import userReducer from './reducers/users';
import reservationReducer, { fetchReservation } from './reducers/reservations';

const reducer = combineReducers({
  events: eventReducer,
  reservations: reservationReducer,
  user: userReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

if (sessionStorage.getItem('user')) {
  store.dispatch({
    type: 'SIGNED_IN',
    payload: JSON.parse(sessionStorage.getItem('user')),
  });
}

store.dispatch(fetchEvent());
store.dispatch(fetchReservation());
export default store;
