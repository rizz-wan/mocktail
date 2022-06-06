// Chore: cleanup, for demo purpose only
import { Stack, Image, Separator, Text, Link, FontIcon } from '@fluentui/react';
import React from 'react';
import { ButtonGroup, ColorTable, Contribute } from '../common';
import { IRootState } from 'src/store';
import { IPhpMysqlMapState, IPhpMysqlProps } from './store/types/phpMysql';
import { fetchSqlData } from '../phpMysql/store/actions';
import { compose } from '@reduxjs/toolkit';
import { injectReducer, injectSaga } from 'redux-injectors';
import { phpMysqlReducer } from '../phpMysql/store/reducer';
import { connect } from 'react-redux';
import { phpMysqlSagas } from '../phpMysql/store/sagas';
import { mockColors } from './store/coldData';
import { Warning } from './warning';
import { Helmet } from 'react-helmet';
import phpMysql from 'src/app/assets/img/phpMysql.jpg';

export class PhpMysql extends React.Component<IPhpMysqlProps> {
  public componentDidMount(): void {
    this.props.fetchSqlData();
  }

  render(): JSX.Element {
    return (
      <>
        <Helmet>
          <title>{'PHP MySql'}</title>
        </Helmet>
        <Stack className='container'>
          <ButtonGroup />
          <Separator />
          <Image loading='lazy' src={phpMysql} width='100%' />
          <Separator />
          <Stack.Item>
            <Text>{'This demo uses '}</Text>
            <Link
              href='https://www.php.net/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <strong>{'PHP'}</strong>
              <FontIcon iconName='NavigateExternalInline' />
            </Link>
            <Text>{' to fetch colors data from '}</Text>
            <Link
              href='https://www.mysql.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <strong>{'MySQL'}</strong>
              <FontIcon iconName='NavigateExternalInline' />
            </Link>
            <Text>{' database.'}</Text>
          </Stack.Item>
          <Separator />
          {this.props.phpMysql.dataLoadingError && <Warning />}
          <ColorTable
            theme={this.props.theme}
            data={
              this.props.phpMysql.dataLoadingError
                ? mockColors
                : this.props.phpMysql.data?.results
            }
          />
          <Contribute />
        </Stack>
      </>
    );
  }
}

export const mapStateToProps = (state: IRootState): IPhpMysqlMapState => {
  return {
    phpMysql: state.phpMysql,
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  fetchSqlData,
};

export default compose<React.ComponentType>(
  injectReducer({
    key: 'phpMysql', // Tip: Make sure this matches the key in IRootState
    reducer: phpMysqlReducer,
  }),
  injectSaga({ key: 'phpMysql', saga: phpMysqlSagas }),
  connect(mapStateToProps, mapDispatchToProps)
)(PhpMysql);
