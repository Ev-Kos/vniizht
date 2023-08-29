import { getTrains } from "../../utils/api";
import { AppDispatch, AppThunk } from "../types";
import { TTrains } from "../types/data";
import { v4 as uuidv4 } from 'uuid';

export const GET_TRAINS_REQUEST: 'GET_TRAINS_REQUEST' = 'GET_TRAINS_REQUEST'
export const GET_TRAINS_SUCCESS: 'GET_TRAINS_SUCCESS' = 'GET_TRAINS_SUCCESS'
export const GET_TRAINS_FAILED: 'GET_TRAINS_FAILED' = 'GET_TRAINS_FAILED'

export interface IGetTrainsRequest {
    readonly type: typeof GET_TRAINS_REQUEST;
}

export interface IGetTrainsSuccess {
    readonly type: typeof GET_TRAINS_SUCCESS;
    readonly playload: TTrains[];
}

export interface IGetTrainsFailed {
    readonly type: typeof GET_TRAINS_FAILED;
}

export type TTrainsActions =
  | IGetTrainsRequest
  | IGetTrainsSuccess
  | IGetTrainsFailed;

  export const GetTrainsRequest = (): IGetTrainsRequest => ({
    type: GET_TRAINS_REQUEST
})

export const GetTrainsSuccess = (playload: TTrains[]): IGetTrainsSuccess => ({
    type: GET_TRAINS_SUCCESS,
    playload
})

export const GetTrainsFailed = (): IGetTrainsFailed => ({
    type: GET_TRAINS_FAILED
})


export const getAllTrains: AppThunk = () =>{
    return function(dispatch: AppDispatch) {
        dispatch(GetTrainsRequest());
        getTrains()
            .then((res) => {
                if (res) {
                    dispatch({
                        type: GET_TRAINS_SUCCESS,
                        playload: res.map((item) => {
                            return { ...item, id: uuidv4() }
                        })
                    })
                } else {
                    dispatch(GetTrainsFailed());
                }
            })
            .catch(() => dispatch(GetTrainsFailed()));
    }
}