import { combineReducers } from 'redux';
import { trainsReducer } from './trainsReducer';
import { characteristicReducer } from './charactericticReducer';
export const rootReducer = combineReducers({
    trainsReducer,
    characteristicReducer,
})