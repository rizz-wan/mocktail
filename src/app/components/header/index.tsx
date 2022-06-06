// Tip: Customize the UI of header
import {
  ITheme,
  mergeStyles,
  Pivot,
  PivotItem,
  Separator,
  Image,
  Toggle,
  Stack,
} from '@fluentui/react';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { IRootState } from 'src/store';
import { history, ThemeModes, transitionTo } from 'src/utils';
import { updateTheme } from 'src/store/theme';
import { IHeaderMapState, IHeaderProps } from './header';
import { headerFooterStyles } from 'src/app/styles';
import logo from 'src/app/assets/img/logo.png';

const toggleStyles: string = mergeStyles({
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 'auto',
});

export class Header extends React.Component<IHeaderProps> {
  getDefaultSelectedKey(): string {
    return history.location.pathname;
  }

  onLinkClick = (
    item?: PivotItem,
    ev?: React.MouseEvent<HTMLElement>
  ): void => {
    transitionTo(item?.props.itemKey as string);
  };

  isDarkMode = (theme: ITheme): boolean => {
    return theme.name === ThemeModes.Dark;
  };

  render(): JSX.Element {
    const theme = this.props.theme;

    return (
      <>
        <div className={headerFooterStyles(theme)}>
          <div className='ms-Grid container' dir='ltr'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm7' style={{ marginTop: '3px' }}>
                <Pivot
                  aria-label='Navigation'
                  onLinkClick={this.onLinkClick}
                  defaultSelectedKey={this.getDefaultSelectedKey()}
                  overflowBehavior='menu'
                >
                  <PivotItem itemKey='/' itemIcon='Home' headerText='Home' />
                  {/* Chore: cleanup, for demo purpose only */}
                  <PivotItem
                    itemKey='/webApi'
                    itemIcon='Globe'
                    headerText='Web API'
                  />
                  {/* Chore: cleanup, for demo purpose only */}
                  <PivotItem
                    itemKey='/PhpMysql'
                    itemIcon='FileSQL'
                    headerText='PHP MySql'
                  />
                </Pivot>
              </div>
              <div
                className='ms-Grid-col ms-sm5'
                style={{
                  display: 'flex',
                  height: '50px',
                  alignItems: 'center',
                }}
              >
                <Toggle
                  onText='Dark theme'
                  offText='Dark theme'
                  role='checkbox'
                  className={toggleStyles}
                  checked={this.isDarkMode(theme)}
                  onClick={() => this.props.updateTheme()}
                />
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <Stack className='mb-3'>
          <Stack.Item align='center' grow>
            <Image height={40} loading='lazy' src={logo} />
          </Stack.Item>
        </Stack>
      </>
    );
  }
}

export const mapStateToProps = (state: IRootState): IHeaderMapState => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  updateTheme,
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
