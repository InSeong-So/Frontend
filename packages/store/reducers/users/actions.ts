import { createRequestActionType } from '@/store/common';

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionType('LOGIN');

export const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionType('SIGNUP');
