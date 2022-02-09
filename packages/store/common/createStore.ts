import { EventEmitter, logAction } from '.';
import { debounce, deepClone, deepCloneAndFreeze } from '@/helpers/utils';
import { Action, Reducer, AnyState, Store } from 'store';

export const createStore = (reducer: Reducer): Store<EventEmitter> => {
  const state = reducer();
  const observers: AnyState = {};
  const actionsEmitter = new EventEmitter();

  const dispatch = (action: Action) => {
    const newState = reducer(state, action);

    for (const [key, value] of Object.entries(newState)) {
      if (state[key] === value) continue;
      state[key] = value;
    }

    actionsEmitter.emit(action.type, action);

    if ((action.type as string).includes('SUCCESS') || (action.type as string).includes('FAILURE'))
      notifyAll(newState);

    logAction(action, newState);
  };

  const subscribe = (callback: AnyState) => {
    Object.keys(callback).forEach(_key => {
      observers[_key] = debounce(callback[_key]);
    });
  };

  const notifyAll = (state: any) => {
    Object.keys(observers).forEach(_key => {
      observers[_key](deepClone(state));
    });
  };

  const getState = (reduce?: string, key?: string) => {
    const copiedState = deepCloneAndFreeze(state);
    return reduce !== undefined && key !== undefined ? copiedState[reduce][key] : copiedState;
  };

  return { dispatch, subscribe, getState, actionsEmitter };
};
