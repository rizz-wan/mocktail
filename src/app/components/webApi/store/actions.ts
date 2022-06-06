// Chore: cleanup, for demo purpose only
import * as types from './actionTypes';
import { IResponse } from './types/response';

export const fetchApiData = (count: number): types.IFetchApiDataAction => {
  const action: types.IFetchApiDataAction = {
    type: types.FetchApiData,
    count,
  };

  return action;
};

export const fetchApiDataSuccess = (
  payload: IResponse
): types.IFetchApiDataSuccessAction => {
  const action: types.IFetchApiDataSuccessAction = {
    type: types.FetchApiDataSuccess,
    payload,
  };

  return action;
};

export const fetchApiDataFailure = (
  error: Error
): types.IFetchApiDataFailureAction => {
  const action: types.IFetchApiDataFailureAction = {
    type: types.FetchApiDataFailure,
    payload: error,
  };

  return action;
};
