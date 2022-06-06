// Chore: cleanup, for demo purpose only
import { ITheme } from '@fluentui/react';
import { IPhpMysqlState } from '../state';

export interface IPhpMysqlMapState {
  phpMysql: IPhpMysqlState;
  theme: ITheme;
}

export interface IPhpMysqlActionProps {
  fetchSqlData: () => void;
}

export type IPhpMysqlProps = IPhpMysqlMapState & IPhpMysqlActionProps;
