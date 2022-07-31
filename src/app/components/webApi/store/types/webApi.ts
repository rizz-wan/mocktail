// Chore: cleanup, for demo purpose only
import { ITheme } from '@fluentui/react';
import { IWebApiState } from '../state';

export interface IWebApiMapState {
  webApi: IWebApiState;
  theme: ITheme;
}

export interface IWebApiActionProps {
  fetchApiData: (count: number) => void;
}

export type IWebApiProps = IWebApiMapState & IWebApiActionProps;
