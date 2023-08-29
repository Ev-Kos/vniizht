import { TTrains } from "../types/data";

export const ADD_CHARACTERISTIC: 'ADD_CHARACTERISTIC' = 'ADD_CHARACTERISTIC';
export const DELETE_CHARACTERISTIC: 'DELETE_CHARACTERISTIC' = 'DELETE_CHARACTERISTIC';

export interface IAddCharacteristic {
  readonly type: typeof ADD_CHARACTERISTIC;
  readonly playload: TTrains;
}

export interface IDeleteCharacteristic {
  readonly type: typeof DELETE_CHARACTERISTIC;
}

export const AddCharacteristic = (playload: TTrains): IAddCharacteristic => ({
  type: ADD_CHARACTERISTIC,
  playload,
})

export const DeleteCharacteristic = (): IDeleteCharacteristic => ({
  type: DELETE_CHARACTERISTIC,
})

export type TCharacteristicActions =
    | IAddCharacteristic
    | IDeleteCharacteristic;