// Chore: cleanup, for demo purpose only
import { Reducer } from '@reduxjs/toolkit';
import { PhpMysqlActions } from './actionTypes';
import { IPhpMysqlState, initialPhpMysqlState } from './state';
import * as types from './actionTypes';

export const phpMysqlReducer: Reducer<IPhpMysqlState, PhpMysqlActions> = (
  state: IPhpMysqlState = initialPhpMysqlState,
  action: PhpMysqlActions
): IPhpMysqlState => {
  switch (action.type) {
    case types.FetchSqlData: {
      return {
        ...state,
        isDataLoading: true,
      };
    }
    case types.FetchSqlDataSuccess: {
      return {
        ...state,
        data: action.payload,
        isDataLoading: false,
        dataLoadingError: undefined,
      };
    }
    case types.FetchSqlDataFailure: {
      return {
        ...state,
        data: undefined,
        isDataLoading: false,
        dataLoadingError: action.payload,
      };
    }
    default:
      return state;
  }
};
