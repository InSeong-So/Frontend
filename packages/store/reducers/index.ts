import { combineReducers } from '../common';
import counter from './counter';

const rooReducer = combineReducers({ counter });

export default rooReducer;
