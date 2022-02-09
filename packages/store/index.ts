import { createStore } from './common';
import rooReducer from './reducers';
import { runSaga } from './sagas';
import { Reducer } from 'store';
import { counterSaga } from './reducers/counter/actions';

const store = createStore(<Reducer>rooReducer);

runSaga(store, counterSaga);

export default store;
