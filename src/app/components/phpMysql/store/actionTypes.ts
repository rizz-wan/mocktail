// Chore: cleanup, for demo purpose only
import { Action } from '@reduxjs/toolkit';
import { IResponse } from './types/response';

export const FetchSqlData = 'FETCH_SQL_DATA';
export const FetchSqlDataSuccess = 'FETCH_SQL_DATA_SUCCESS';
export const FetchSqlDataFailure = 'FETCH_SQL_DATA_FAILURE';

export type IFetchSqlDataAction = Action<typeof FetchSqlData>;

export interface IFetchSqlDataSuccessAction
  extends Action<typeof FetchSqlDataSuccess> {
  payload: IResponse;
}

export interface IFetchSqlDataFailureAction
  extends Action<typeof FetchSqlDataFailure> {
  payload: Error;
}

export type PhpMysqlActions =
  | IFetchSqlDataAction
  | IFetchSqlDataSuccessAction
  | IFetchSqlDataFailureAction;
