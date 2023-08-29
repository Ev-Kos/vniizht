import {
  ADD_CHARACTERISTIC,
  DELETE_CHARACTERISTIC,
  TCharacteristicActions
} from '../actions/characteristicsActions';
import { TTrains } from '../types/data';

type TInitialState = {
  train: TTrains | null
}

const initialState: TInitialState = {
  train: null
}

export const characteristicReducer = (
  state = initialState,
  action: TCharacteristicActions) => {
  switch (action.type) {
    case ADD_CHARACTERISTIC: {
      return {
        ...state,
        train: action.playload,
      };
    }
    case DELETE_CHARACTERISTIC: {
      return {
        ...state,
        train: null
      };
    }
    default: {
      return state;
    }
  }
};