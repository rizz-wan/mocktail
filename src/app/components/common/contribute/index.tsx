// Chore: cleanup, for demo purpose only
import { PrimaryButton, Stack } from '@fluentui/react';
import React from 'react';
import '../style.scss';

export class Contribute extends React.Component {
  render(): JSX.Element {
    return (
      <>
        <Stack.Item align='center'>
          <h2>{'Want to contribute?'}</h2>
        </Stack.Item>
        <PrimaryButton
          iconProps={{ iconName: 'CodeEdit' }}
          className='styled-Button'
          text='Start Contributing'
          href='https://github.com/rizz-wan/mocktail#feedback--contribution'
          target='_blank'
          rel='noreferrer noopener'
        />
      </>
    );
  }
}
