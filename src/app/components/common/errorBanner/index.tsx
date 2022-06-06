// Chore: cleanup, for demo purpose only
import { Link, MessageBar, MessageBarType } from '@fluentui/react';
import React from 'react';
import '../style.scss';

export class ErrorBanner extends React.Component {
  render(): JSX.Element {
    return (
      <MessageBar messageBarType={MessageBarType.error} isMultiline>
        {'Aaah! Something went wrong. you may '}
        <Link
          onClick={() => {
            window.location.reload();
          }}
          underline
        >
          <strong>{'refresh'}</strong>
        </Link>
        {' the page or try again later.'}
      </MessageBar>
    );
  }
}
