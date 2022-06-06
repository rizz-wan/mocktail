// Chore: cleanup, for demo purpose only
import { Action } from '@reduxjs/toolkit';
import { IResponse } from './types/response';

export const FetchApiData = 'FETCH_API_DATA';
export const FetchApiDataSuccess = 'FETCH_API_DATA_SUCCESS';
export const FetchApiDataFailure = 'FETCH_API_DATA_FAILURE';

export interface IFetchApiDataAction extends Action<typeof FetchApiData> {
  count: number;
}

export interface IFetchApiDataSuccessAction
  extends Action<typeof FetchApiDataSuccess> {
  payload: IResponse;
}

export interface IFetchApiDataFailureAction
  extends Action<typeof FetchApiDataFailure> {
  payload: Error;
}

export type WebApiActions =
  | IFetchApiDataAction
  | IFetchApiDataSuccessAction
  | IFetchApiDataFailureAction;
