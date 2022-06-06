// Chore: cleanup, for demo purpose only
import * as actionTypes from './actionTypes';
import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from './actions';
import { IApiResponse } from './types/response';
import { requestHelper } from 'src/utils';

export function* getData(action: actionTypes.IFetchApiDataAction): Generator {
  try {
    const apiResponse = (yield call(
      requestHelper,
      'api',
      {
        params: {
          results: action.count,
        },
      },
      true
    )) as IApiResponse;
    yield put(actions.fetchApiDataSuccess(apiResponse.response));
  } catch (error: any) {
    yield put(
      actions.fetchApiDataFailure({
        name: 'getData Error',
        message: `${error.errorMessage}`,
      })
    );
  }
}

export function* webApiSagas(): Generator {
  yield takeLatest(actionTypes.FetchApiData, getData);
}
