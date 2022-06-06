import { ITheme } from '@fluentui/react';
import {
  IPhpMysqlState,
  initialPhpMysqlState,
} from 'src/app/components/phpMysql/store/state';
import {
  initialWebApiState,
  IWebApiState,
} from 'src/app/components/webApi/store/state';
import { defaultTheme } from 'src/utils';

export type RootStateKey = keyof IRootState;

// Tip: Declare your reducers here
export interface IRootState {
  theme: ITheme;
  phpMysql: IPhpMysqlState; // Chore: cleanup, for demo purpose only
  webApi: IWebApiState; // Chore: cleanup, for demo purpose only
}

export const initialRootState: IRootState = {
  theme: defaultTheme,
  phpMysql: initialPhpMysqlState, // Chore: cleanup, for demo purpose only
  webApi: initialWebApiState, // Chore: cleanup, for demo purpose only
};
