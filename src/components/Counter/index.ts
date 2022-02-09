import { $closest } from '@/helpers/utils';
import {
  DECREMENT_COUNTER,
  DECREMENT_COUNTER_SUCCESS,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_SUCCESS,
  RESET_COUNTER,
  RESET_COUNTER_SUCCESS,
} from '@/store/reducers/counter/actions';
import { MouseEvent } from 'dom';
import { Store } from 'store';
import CounterTemplate from './Template';

const handleCase: Record<string, string> = {
  // 동기
  'increment-button': INCREMENT_COUNTER_SUCCESS,
  'decrement-button': DECREMENT_COUNTER_SUCCESS,
  'reset-button': RESET_COUNTER_SUCCESS,
  // 비동기
  'increment-button-async': INCREMENT_COUNTER,
  'decrement-button-async': DECREMENT_COUNTER,
  'reset-button-async': RESET_COUNTER,
};

const CounterComponent = (store: Store) => {
  const handleClick = ({ target }: MouseEvent) => {
    let id;
    if (target.matches('button')) {
      id = target.id;
    } else if (target.matches('i')) {
      id = $closest(target, 'button').id;
    } else return;

    store.dispatch({ type: handleCase[id] });
  };
  return {
    component: CounterTemplate({ count: store.getState().counter.count }),
    events: [{ type: 'click', cb: handleClick }],
  };
};

export default CounterComponent;
