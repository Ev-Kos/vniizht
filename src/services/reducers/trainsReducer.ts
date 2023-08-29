import {
    TTrainsActions,
    GET_TRAINS_REQUEST,
    GET_TRAINS_SUCCESS,
    GET_TRAINS_FAILED
} from "../actions/trainsActions";
import { TTrains } from "../types/data";

interface TInitialState {
    trains: Array<TTrains>,
    trainsRequest: boolean;
    trainsFailed: boolean;
}

const initialState: TInitialState = {
    trains: [],
    trainsRequest: false,
    trainsFailed: false,
}

export const trainsReducer = (
    state = initialState,
    action: TTrainsActions
    ):  TInitialState => {
    switch (action.type) {
        case GET_TRAINS_REQUEST: {
            return {
                ...state,
                trainsRequest: true
            }
        }
        case GET_TRAINS_SUCCESS: {
            return {
                ...state,
                trains: action.playload,
                trainsRequest: false,
                trainsFailed: false,

            }
        }
        case GET_TRAINS_FAILED: {
            return {
                ...state,
                trainsRequest: false,
                trainsFailed: true
            }
        }
        default: {
            return state;
        }
    }
}