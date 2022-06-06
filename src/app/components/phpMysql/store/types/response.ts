// Chore: cleanup, for demo purpose only
import { IColor } from 'src/app/types';
export interface IResponse {
  results: IColor[];
}

export interface IApiResponse {
  response: IResponse;
}
