// Tip: Customize the UI of footer
import {
  FontIcon,
  ITheme,
  Link,
  mergeStyles,
  Separator,
  Stack,
  Text,
} from '@fluentui/react';
import { compose } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from 'react-redux';
import { headerFooterStyles } from 'src/app/styles';
import { IRootState } from 'src/store';

const iconStyles = mergeStyles({
  color: 'red',
  fontSize: 10,
});

export interface IFooterProps {
  theme: ITheme;
}

export class Footer extends React.Component<IFooterProps> {
  render(): JSX.Element {
    const theme = this.props.theme;
    return (
      <>
        <Separator />
        <div className={headerFooterStyles(theme)}>
          <Stack
            className='container'
            verticalAlign='center'
            style={{ height: '100%' }}
          >
            <Stack.Item align='center'>
              <Text>
                {'with '}
                <FontIcon
                  aria-label='heart'
                  iconName='HeartFill'
                  className={iconStyles}
                />
                {' from '}
                <Link
                  href='https://irizwan.com'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <strong>{'Rizwan'}</strong>
                </Link>
              </Text>
            </Stack.Item>
          </Stack>
        </div>
      </>
    );
  }
}

export const mapStateToProps = (state: IRootState): IFooterProps => {
  return {
    theme: state.theme,
  };
};

export default compose<React.ComponentType>(connect(mapStateToProps))(Footer);
