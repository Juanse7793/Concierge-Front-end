import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import eventReducer, { fetchEvent } from './reducers/events';

const reducer = combineReducers({
  eventReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(fetchEvent());
export default store;
