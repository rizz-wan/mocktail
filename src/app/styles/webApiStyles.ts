// Chore: cleanup, for demo purpose only
import {
  DefaultEffects,
  ITheme,
  mergeStyles,
  MotionAnimations,
} from '@fluentui/react';

export const getDataSurfaceStyles = (theme: ITheme): string =>
  mergeStyles({
    backgroundColor: theme.palette.neutralLight,
    padding: 8,
    marginTop: '80px !important',
    boxShadow: DefaultEffects.elevation8,
    animation: MotionAnimations.slideUpIn,
    borderRadius: DefaultEffects.roundedCorner4,
    minWidth: '300px',
    '.card-content': {
      fontWeight: 500,
      padding: '0 12px',
      color: theme.palette.neutralSecondary,
      i: {
        marginRight: 6,
      },
    },
  });

export const getImageStyles = (theme: ITheme): string =>
  mergeStyles({
    marginTop: '-80px',
    height: 148,
    width: 160,
    '.image-container': {
      height: 148,
      width: 148,
      padding: '4px',
      borderRadius: '100%',
      background: `${theme.palette.white}`,
    },
    '.ms-Image': {
      height: 140,
      width: 140,
      padding: 4,
      border: `2px solid ${theme.palette.neutralTertiaryAlt}`,
      borderRadius: '100%',
      img: {
        borderRadius: '100%',
      },
    },
  });
