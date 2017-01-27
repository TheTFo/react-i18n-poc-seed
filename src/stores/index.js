import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { notesReducer } from '../routes/notes/modules/notes';

const middleware = [thunk];
const enhancers = [];
const store = createStore(
  combineReducers({ notes: notesReducer }),
  {},
  compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
);

export default store;