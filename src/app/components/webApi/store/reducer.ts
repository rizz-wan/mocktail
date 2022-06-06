// Chore: cleanup, for demo purpose only
import { Reducer } from '@reduxjs/toolkit';
import { WebApiActions } from './actionTypes';
import { IWebApiState, initialWebApiState } from './state';
import * as types from './actionTypes';

export const webApiReducer: Reducer<IWebApiState, WebApiActions> = (
  state: IWebApiState = initialWebApiState,
  action: WebApiActions
): IWebApiState => {
  switch (action.type) {
    case types.FetchApiData: {
      return {
        ...state,
        isDataLoading: true,
      };
    }
    case types.FetchApiDataSuccess: {
      return {
        ...state,
        data: action.payload,
        isDataLoading: false,
        dataLoadingError: undefined,
      };
    }
    case types.FetchApiDataFailure: {
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
