// Chore: cleanup, for demo purpose only
import { Link, MessageBar, MessageBarType } from '@fluentui/react';
import React from 'react';

export class Warning extends React.Component {
  render(): JSX.Element {
    return (
      <MessageBar messageBarType={MessageBarType.warning} isMultiline>
        {'Connection to database is not set properly, Rendering cold data.'}
        <br />
        {'Make sure to set the correct parameters in '}
        <Link
          href='https://github.com/rizz-wan/mocktail/blob/master/src/api/connect.php'
          target='_blank'
          rel='noreferrer noopener'
        >
          <strong>{'api/connect.php'}</strong>
        </Link>
        {' file and import'}
        <Link
          href='https://github.com/rizz-wan/mocktail/blob/master/src/api/colors.sql'
          target='_blank'
          rel='noreferrer noopener'
        >
          <strong>{'api/colors.sql'}</strong>
        </Link>
        {' file to the database correctly for this page to work properly.'}
      </MessageBar>
    );
  }
}
