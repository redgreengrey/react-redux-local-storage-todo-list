import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './reducers';

const STATE_KEY = "todosState";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem(STATE_KEY)
  ? JSON.parse(localStorage.getItem(STATE_KEY))
  : {};

const store = createStore(rootReducer, persistedState, composeEnhancer(applyMiddleware()));

store.subscribe(() => {
  localStorage.setItem(STATE_KEY, JSON.stringify(store.getState()))
});

export { store };
