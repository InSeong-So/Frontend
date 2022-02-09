import { createRequestSaga, createRequestActionType, takeEvery } from '@/store/common';

const promiseCounter = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: 1,
      });
    }, 2000);
  });
};

export const [INCREMENT_COUNTER, INCREMENT_COUNTER_SUCCESS, INCREMENT_COUNTER_FAILURE] =
  createRequestActionType('INCREMENT_COUNTER');

export const [DECREMENT_COUNTER, DECREMENT_COUNTER_SUCCESS, DECREMENT_COUNTER_FAILURE] =
  createRequestActionType('DECREMENT_COUNTER');

export const [RESET_COUNTER, RESET_COUNTER_SUCCESS, RESET_COUNTER_FAILURE] =
  createRequestActionType('RESET_COUNTER');

export const increase = () => ({ type: INCREMENT_COUNTER_SUCCESS });

export const decrease = () => ({ type: DECREMENT_COUNTER_SUCCESS });

export const reset = () => ({ type: RESET_COUNTER_SUCCESS });

export const increaseAsync = (action: any) =>
  createRequestSaga(INCREMENT_COUNTER, promiseCounter, action);

export const decreaseAsync = (action: any) =>
  createRequestSaga(DECREMENT_COUNTER, promiseCounter, action);

export const resetAsync = (action: any) => createRequestSaga(RESET_COUNTER, promiseCounter, action);

export function* counterSaga() {
  yield* takeEvery(INCREMENT_COUNTER, increaseAsync);
  yield* takeEvery(DECREMENT_COUNTER, decreaseAsync);
  yield* takeEvery(RESET_COUNTER, resetAsync);
}
