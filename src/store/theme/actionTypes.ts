import { Action } from '@reduxjs/toolkit';

export const UpdateTheme = 'UPDATE_THEME';

export type IUpdateThemeAction = Action<typeof UpdateTheme>;

export type ThemeActions = IUpdateThemeAction;
