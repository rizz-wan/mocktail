import * as types from './actionTypes';

export const updateTheme = (): types.IUpdateThemeAction => {
  const action: types.IUpdateThemeAction = {
    type: types.UpdateTheme,
  };

  return action;
};
