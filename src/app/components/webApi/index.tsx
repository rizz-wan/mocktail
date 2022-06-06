// Chore: cleanup, for demo purpose only
import {
  Stack,
  Image,
  Separator,
  Text,
  Link,
  FontIcon,
  PrimaryButton,
} from '@fluentui/react';
import { IWebApiMapState, IWebApiProps } from './store/types/webApi';
import { fetchApiData } from './store/actions';
import React from 'react';
import { ButtonGroup, Contribute, ErrorBanner, ProfileCard } from '../common';
import { IRootState } from 'src/store';
import { webApiReducer } from './store/reducer';
import { webApiSagas } from './store/sagas';
import { compose } from '@reduxjs/toolkit';
import { injectReducer, injectSaga } from 'redux-injectors';
import { connect } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import { IWebApiState } from './store/state';
import { getDataSurfaceStyles, marginTop } from 'src/app/styles';
import { Helmet } from 'react-helmet';
import webApi from 'src/app/assets/img/webApi.png';

export class WebApi extends React.Component<IWebApiProps> {
  public componentDidMount(): void {
    this.props.fetchApiData(3);
  }

  getProfileCards(): JSX.Element {
    if (this.props.webApi.dataLoadingError) return <ErrorBanner />;
    return (
      <>
        {this.props.webApi.data?.results.map((result, index) => {
          return (
            <Stack.Item
              className={getDataSurfaceStyles(this.props.theme)}
              key={index}
              grow
            >
              <ProfileCard profile={result} theme={this.props.theme} />
            </Stack.Item>
          );
        })}
      </>
    );
  }

  render(): JSX.Element {
    return (
      <>
        <Helmet>
          <title>{'Web API'}</title>
        </Helmet>
        <Stack className='container'>
          <ButtonGroup />
          <Separator />
          <Image loading='lazy' src={webApi} width='100%' />
          <Separator />
          <Stack.Item>
            <Text>{'This demo uses '}</Text>
            <Link
              href='https://randomuser.me/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <strong>{'Random User Generator'}</strong>
              <FontIcon iconName='NavigateExternalInline' />
            </Link>
            <Text>{' to fetch profile of random users.'}</Text>
          </Stack.Item>
          <Separator />
          <Stack
            className='mt-3'
            tokens={{ childrenGap: 16 }}
            horizontal
            grow
            wrap
          >
            {this.getProfileCards()}
          </Stack>
          <PrimaryButton
            iconProps={{ iconName: 'Group' }}
            className={`styled-Button ${marginTop}`}
            text='Get new users!'
            onClick={() => {
              this.props.fetchApiData(3);
            }}
          />
          <Separator />
          <Contribute />
        </Stack>
      </>
    );
  }
}

export const mapStateToProps = (state: IRootState): IWebApiMapState => {
  return {
    webApi: state.webApi,
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  fetchApiData,
};

export default compose<React.ComponentType>(
  injectReducer({
    key: 'webApi', // Tip: Make sure this matches the key in IRootState
    reducer: webApiReducer as React.Reducer<IWebApiState, Action>,
  }),
  injectSaga({ key: 'webApi', saga: webApiSagas }),
  connect(mapStateToProps, mapDispatchToProps)
)(WebApi);
