import { ITheme } from '@fluentui/react';
import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';
import { IRootState, RootStateKey } from '../store';
import { themeReducer } from './theme';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';

type RequiredRootState = Required<IRootState>;

export type InjectedReducersType = {
  [S in RootStateKey]?: Reducer<RequiredRootState[S], AnyAction>;
};

type rootReducerType = Reducer<
  CombinedState<{ theme: ITheme; router: RouterState }>,
  AnyAction
>;

type ReducerInjector = (
  injectedReducers: InjectedReducersType
) => rootReducerType;

export function createRootReducer(
  injectedReducers: InjectedReducersType = {},
  history: History<unknown>
): rootReducerType {
  const rootReducer = combineReducers({
    ...injectedReducers,
    // Tip: You can add other non-injected reducers here...
    theme: themeReducer,
    router: connectRouter(history),
  }) as rootReducerType;

  return rootReducer;
}

export function createRootReducerWithHistory(
  history: History<unknown>
): ReducerInjector {
  return (injectedReducers: InjectedReducersType = {}): rootReducerType => {
    return createRootReducer(injectedReducers, history);
  };
}
