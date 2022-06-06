import { Reducer } from '@reduxjs/toolkit';
import { ThemeActions } from './actionTypes';
import { defaultTheme, ThemeModes, themeModes } from '../../utils';
import * as types from './actionTypes';
import { ITheme } from '@fluentui/react';

export const themeReducer: Reducer<ITheme, ThemeActions> = (
  theme: ITheme = defaultTheme,
  action: ThemeActions
): ITheme => {
  switch (action.type) {
    case types.UpdateTheme:
      return theme.name === ThemeModes.Dark
        ? themeModes.light
        : themeModes.dark;
    default:
      return theme;
  }
};
