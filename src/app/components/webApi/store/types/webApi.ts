// Chore: cleanup, for demo purpose only
import { IDropdownOption, ITheme } from '@fluentui/react';
import { IWebApiState } from '../state';

export interface IWebApiStateProps {
  month: number;
  monthDates: IDropdownOption[];
  monthDate: number;
  factDate: string;
}

export interface IWebApiMapState {
  webApi: IWebApiState;
  theme: ITheme;
}

export interface IWebApiActionProps {
  fetchApiData: (count: number) => void;
}

export type IWebApiProps = IWebApiMapState & IWebApiActionProps;
