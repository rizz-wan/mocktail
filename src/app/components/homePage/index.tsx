// Tip: Customize the UI of homePage
import {
  Image,
  Stack,
  Separator,
  Text,
  MessageBar,
  MessageBarType,
  mergeStyles,
} from '@fluentui/react';
import React from 'react';
import { IRootState } from 'src/store';
import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import {
  ButtonGroup,
  Contribute,
  ExternalLink,
} from 'src/app/components/common';
import { getImageElements } from 'src/app/styles';
import mocktail from 'src/app/assets/img/mocktail.png';

import { ITheme } from '@fluentui/react';
import { Helmet } from 'react-helmet';

export interface IHomePageProps {
  theme: ITheme;
}

const getListStyles = (): string => {
  return mergeStyles({
    fontSize: 15,
    paddingRight: 40,
  });
};

export class HomePage extends React.Component<IHomePageProps> {
  render(): JSX.Element {
    return (
      <>
        <Helmet>
          <title>{'Home'}</title>
        </Helmet>
        <Stack className='container'>
          <Image
            loading='lazy'
            className={getImageElements(this.props.theme)}
            src={mocktail}
            width='100%'
          />
          <Separator />
          <ButtonGroup />
          <Separator />
          <h2>{'Bundled Enhancements'}</h2>
          <ul className={getListStyles()}>
            <li>
              <ExternalLink
                text='Typescript'
                linkTo='https://www.typescriptlang.org/'
              />
              {' enabled for better dev experience.'}
            </li>
            <li>
              {'With '}
              <ExternalLink
                text="Fluent UI's"
                linkTo='https://developer.microsoft.com/en-us/fluentui#/controls/web'
              />
              {
                ' robust, up-to-date web controls, save yourself from creating atomic and molecular UI controls from scratch.'
              }
            </li>
            <li>
              <ExternalLink
                text='Office UI Fabric
                  Icons'
                linkTo='https://uifabricicons.azurewebsites.net/'
              />
              {' support to get access to huge set of awesome icons.'}
            </li>
            <li>
              {'With '}
              <ExternalLink
                text='sass-loader'
                linkTo='https://www.npmjs.com/package/sass-loader'
              />
              {' load a Sass/SCSS file and compiles it to CSS.'}
            </li>
            <li>
              <ExternalLink
                text='Theming'
                linkTo='https://aka.ms/themedesigner'
              />
              {' infra.'}
            </li>
            <li>
              {'Uses '}
              <ExternalLink
                text='React Helmet'
                linkTo='https://www.npmjs.com/package/sass-loader'
              />
              {
                ' to add customized headers for each page, if required, for better SEO.'
              }
            </li>
            <li>
              {'With '}
              <ExternalLink
                text='React Router DOM'
                linkTo='https://www.npmjs.com/package/react-router-dom'
              />
              {' use the power of '}
              <ExternalLink
                text='React Router'
                linkTo='https://reactrouter.com/'
              />
              {' in web.'}
            </li>
            <li>
              {'A Predictable, performant and flexible state container using '}
              <ExternalLink
                text='react-redux'
                linkTo='https://www.npmjs.com/package/react-redux'
              />
              {'.'}
            </li>
            <li>
              {
                'Dynamically load redux reducers and redux-saga sagas as needed, instead of loading them all upfront using '
              }
              <ExternalLink
                text='redux-injectors'
                linkTo='https://www.npmjs.com/package/redux-injectors'
              />
              {'.'}
            </li>
            <li>
              <ExternalLink
                text='Connected React Router'
                linkTo='https://www.npmjs.com/package/connected-react-router'
              />
              {' to synchronize your router state with redux store.'}
            </li>
            <li>
              {'App level store with useful enhancers and middleware such as '}
              <ExternalLink
                text='Redux-Saga'
                linkTo='https://redux-saga.js.org/'
              />
              {' and '}
              <ExternalLink
                text='Logger for Redux'
                linkTo='https://www.npmjs.com/package/redux-logger'
              />
              {'.'}
            </li>
            <li>
              {'Configured completely to be a first-class '}
              <ExternalLink
                text='Progressive Web App'
                linkTo='https://developers.google.com/web/progressive-web-apps/'
              />
              {', however the '}
              <strong>{'offline/cache-first'}</strong>
              {' behavior is disabled by default as it comes with some '}
              <ExternalLink
                text='pitfalls'
                linkTo='https://github.com/facebook/create-react-app/issues/2398'
              />
              {' and should be enabled consciously.'}
              <MessageBar className='my-2'>
                <Text variant='medium'>
                  {
                    'To enable caching mode, simply switch serviceWorker.unregister() to serviceWorker.register() in'
                  }
                  <ExternalLink
                    text='index.tsx'
                    linkTo='https://github.com/rizz-wan/mocktail/blob/main/src/index.tsx'
                  />
                </Text>
                {':'}
                <MessageBar
                  messageBarType={MessageBarType.error}
                  className='mt-2'
                >
                  <Text variant='medium'>
                    <code>
                      <strong>
                        {'serviceWorkerRegistration.unregister();'}
                      </strong>
                    </code>
                  </Text>
                </MessageBar>
                <MessageBar messageBarType={MessageBarType.success}>
                  <Text variant='medium'>
                    <code>
                      <strong>{'serviceWorkerRegistration.register();'}</strong>
                    </code>
                  </Text>
                </MessageBar>
              </MessageBar>
            </li>
            <li>
              {'A performance relayer, using '}
              <ExternalLink
                text='web-vitals'
                linkTo='https://github.com/GoogleChrome/web-vitals'
              />
              {
                ', that allows you to measure and analyze the performance of your application using different metrics.'
              }
              <MessageBar className='my-2'>
                <Text variant='medium'>
                  {
                    'To measure any of the supported metrics, just pass a function into the reportWebVitals function in'
                  }
                  <ExternalLink
                    text='index.tsx'
                    linkTo='https://github.com/rizz-wan/mocktail/blob/main/src/index.tsx'
                  />
                  {':'}
                </Text>
                <MessageBar
                  messageBarType={MessageBarType.success}
                  className='mt-2'
                >
                  <Text variant='medium'>
                    <code>
                      <strong>{'reportWebVitals(console.log);'}</strong>
                    </code>
                  </Text>
                </MessageBar>
              </MessageBar>
            </li>
            <li>
              {'World class testing environment with '}
              <ExternalLink text='jest' linkTo='https://jestjs.io/' />
              {', '}
              <ExternalLink
                text='jest-dom'
                linkTo='https://github.com/testing-library/jest-dom#with-typescript'
              />
              {' and '}
              <ExternalLink
                text='react testing
                library'
                linkTo='https://testing-library.com/docs/react-testing-library/intro'
              />
              {' for faster and reliable development.'}
            </li>
          </ul>
          <Separator />
          <Contribute />
        </Stack>
      </>
    );
  }
}

export const mapStateToProps = (state: IRootState): IHomePageProps => {
  return {
    theme: state.theme,
  };
};

export default compose<React.ComponentType>(connect(mapStateToProps))(HomePage);
