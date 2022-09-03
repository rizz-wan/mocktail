import { ITheme, createTheme } from '@fluentui/react';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/store';

export enum ThemeModes {
  Light = 'light',
  Dark = 'dark',
}

export interface IThemeModes {
  light: ITheme;
  dark: ITheme;
}

// Tip: Your theme font goes here
const themeFontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif";

export const themeModes: IThemeModes = {
  light: createTheme({
    defaultFontStyle: {
      fontFamily: themeFontFamily,
    },
    isInverted: false,
    // Tip: Navigate to https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html to get customized palette
    palette: {
      themePrimary: '#0078d4',
      themeLighterAlt: '#eff6fc',
      themeLighter: '#deecf9',
      themeLight: '#c7e0f4',
      themeTertiary: '#71afe5',
      themeSecondary: '#2b88d8',
      themeDarkAlt: '#106ebe',
      themeDark: '#005a9e',
      themeDarker: '#004578',
      neutralLighterAlt: '#faf9f8',
      neutralLighter: '#f3f2f1',
      neutralLight: '#edebe9',
      neutralQuaternaryAlt: '#e1dfdd',
      neutralQuaternary: '#d0d0d0',
      neutralTertiaryAlt: '#c8c6c4',
      neutralTertiary: '#a19f9d',
      neutralSecondary: '#605e5c',
      neutralPrimaryAlt: '#3b3a39',
      neutralPrimary: '#323130',
      neutralDark: '#201f1e',
      black: '#000000',
      white: '#ffffff',
    },
    semanticColors: {
      cardShadowHovered: '#ccc',
    },
  }),

  dark: createTheme({
    defaultFontStyle: {
      fontFamily: themeFontFamily,
    },
    isInverted: true,
    palette: {
      themePrimary: '#229fff',
      themeLighterAlt: '#01060a',
      themeLighter: '#051929',
      themeLight: '#0a304d',
      themeTertiary: '#145f99',
      themeSecondary: '#1d8ce0',
      themeDarkAlt: '#37a8ff',
      themeDark: '#56b6ff',
      themeDarker: '#83c9ff',
      neutralLighterAlt: '#2b2b2b',
      neutralLighter: '#333333',
      neutralLight: '#414141',
      neutralQuaternaryAlt: '#4a4a4a',
      neutralQuaternary: '#515151',
      neutralTertiaryAlt: '#6f6f6f',
      neutralTertiary: '#c8c8c8',
      neutralSecondary: '#d0d0d0',
      neutralPrimaryAlt: '#dadada',
      neutralPrimary: '#ffffff',
      neutralDark: '#f4f4f4',
      black: '#f8f8f8',
      white: '#222222',
    },
    semanticColors: {
      cardShadowHovered: '#000',
    },
  }),
};

themeModes.light.name = ThemeModes.Light;
themeModes.dark.name = ThemeModes.Dark;

// Set dark mode if user is using dark mode on the device else light theme
export const defaultTheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? themeModes.dark
    : themeModes.light;

// Tip: Get current theme in functional components
export function GetCurrentTheme(): ITheme {
  return useSelector((state: IRootState) => state.theme);
}

export function setInitialThemeClassToBody() {
  let documentClassList = document.body.classList;
  if (
    !(
      documentClassList.contains(ThemeModes.Dark) ||
      documentClassList.contains(ThemeModes.Light)
    )
  )
    documentClassList.add(
      defaultTheme.isInverted ? ThemeModes.Dark : ThemeModes.Light
    );
}