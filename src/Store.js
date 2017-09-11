import { createStore } from 'redux';
import reducers from './reducers';

const initialStates = {
  isLogged: true
};

const store = createStore(reducers, initialStates);

export default store;
