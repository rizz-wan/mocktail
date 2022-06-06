// Chore: cleanup, for demo purpose only
import { IPerson } from 'src/app/types';
export interface IResponse {
  results: IPerson[];
}

export interface IApiResponse {
  response: IResponse;
}
