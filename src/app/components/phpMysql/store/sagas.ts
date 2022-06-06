// Chore: cleanup, for demo purpose only
import * as actionTypes from './actionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import { IApiResponse } from './types/response';
import * as actions from './actions';
import { requestHelper } from 'src/utils';

export function* getData(action: actionTypes.IFetchSqlDataAction): Generator {
  try {
    const apiResponse = (yield call(requestHelper, 'fetch', {
      params: {},
    })) as IApiResponse;
    yield put(actions.fetchSqlDataSuccess(apiResponse.response));
  } catch (error: any) {
    yield put(
      actions.fetchSqlDataFailure({
        name: 'getData Error',
        message: `${error.errorMessage}`,
      })
    );
  }
}

export function* phpMysqlSagas(): Generator {
  yield takeLatest(actionTypes.FetchSqlData, getData);
}
