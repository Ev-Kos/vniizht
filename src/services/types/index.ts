import { store } from '../store';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TTrainsActions } from '../actions/trainsActions';
import { TCharacteristicActions } from '../actions/characteristicsActions';

type TApplicationActions =
  | TTrainsActions
  | TCharacteristicActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;