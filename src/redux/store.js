import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import eventReducer, { fetchEvent } from './reducers/events';
import userReducer from './reducers/users';

const reducer = combineReducers({
  events: eventReducer,
  user: userReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(fetchEvent());
export default store;
