import { ITheme } from '@fluentui/react';

export interface IHeaderMapState {
  theme: ITheme;
}

export interface IHeaderActionProps {
  updateTheme: () => void;
}

export type IHeaderProps = IHeaderMapState & IHeaderActionProps;
