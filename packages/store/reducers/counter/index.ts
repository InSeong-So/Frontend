import {
  INCREMENT_COUNTER_SUCCESS,
  INCREMENT_COUNTER_FAILURE,
  DECREMENT_COUNTER_SUCCESS,
  DECREMENT_COUNTER_FAILURE,
  RESET_COUNTER_FAILURE,
  RESET_COUNTER_SUCCESS,
} from './actions';
import { Reducer } from 'store';

interface StateProps {
  count: number;
}

export const initialState: StateProps = {
  count: 0,
};

const counter: Reducer = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case INCREMENT_COUNTER_SUCCESS:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNTER_SUCCESS:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET_COUNTER_SUCCESS:
      return {
        ...state,
        count: 0,
      };
    /* TODO: 에러 처리 */
    case INCREMENT_COUNTER_FAILURE:
    case DECREMENT_COUNTER_FAILURE:
    case RESET_COUNTER_FAILURE:
    default:
      return state;
  }
};

export default counter;
