import { ITheme, mergeStyles } from '@fluentui/react';
import bg1 from 'src/app/assets/img/bg1.png';
import bg2 from 'src/app/assets/img/bg2.png';
import bg3 from 'src/app/assets/img/bg3.png';

export const getImageElements = (theme: ITheme): string =>
  mergeStyles({
    filter: `drop-shadow(3px 3px 1px ${theme.semanticColors.cardShadowHovered})`,
    background: `url("${bg1}"), url("${bg2}"), url("${bg3}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    img: {
      filter: `${theme.isInverted ? 'invert()' : ''}`,
    },
  });

export const headerFooterStyles = (theme: ITheme): string =>
  mergeStyles({
    height: '50px',
    backgroundColor: theme.semanticColors.buttonBackgroundPressed,
  });

// Chore: cleanup, for demo purpose only
export const marginTop: string = mergeStyles({
  marginTop: '12px !important',
});
