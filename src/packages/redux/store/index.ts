import createStore from '../common/createStore';
import rootReducer from '@/redux/reducers';
import { runSaga } from '@/redux/sagas';
import { Reducer } from 'redux';
import { menuSaga } from '@/redux/reducers/menus/actions';

const store = createStore(<Reducer>rootReducer);

runSaga(store, menuSaga);

export default store;
