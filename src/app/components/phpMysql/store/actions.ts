// Chore: cleanup, for demo purpose only
import * as types from './actionTypes';
import { IResponse } from './types/response';

export const fetchSqlData = (): types.IFetchSqlDataAction => {
  const action: types.IFetchSqlDataAction = {
    type: types.FetchSqlData,
  };

  return action;
};

export const fetchSqlDataSuccess = (
  payload: IResponse
): types.IFetchSqlDataSuccessAction => {
  const action: types.IFetchSqlDataSuccessAction = {
    type: types.FetchSqlDataSuccess,
    payload,
  };

  return action;
};

export const fetchSqlDataFailure = (
  error: Error
): types.IFetchSqlDataFailureAction => {
  const action: types.IFetchSqlDataFailureAction = {
    type: types.FetchSqlDataFailure,
    payload: error,
  };

  return action;
};
