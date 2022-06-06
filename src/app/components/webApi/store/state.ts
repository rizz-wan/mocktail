// Chore: cleanup, for demo purpose only
import { IResponse } from './types/response';

export interface IWebApiState {
  data: IResponse | undefined;
  isDataLoading: boolean;
  dataLoadingError: Error | undefined;
}

export const initialWebApiState: IWebApiState = {
  data: undefined,
  isDataLoading: false,
  dataLoadingError: undefined,
};
