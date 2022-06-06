// Chore: cleanup, for demo purpose only
import { IResponse } from './types/response';
export interface IPhpMysqlState {
  data: IResponse | undefined;
  isDataLoading: boolean;
  dataLoadingError: Error | undefined;
}

export const initialPhpMysqlState: IPhpMysqlState = {
  data: undefined,
  isDataLoading: false,
  dataLoadingError: undefined,
};
