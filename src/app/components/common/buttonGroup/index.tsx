// Chore: cleanup, for demo purpose only
import { DefaultButton, PrimaryButton, Stack } from '@fluentui/react';
import React from 'react';
import '../style.scss';

export class ButtonGroup extends React.Component {
  render(): JSX.Element {
    return (
      <Stack horizontal wrap>
        <Stack.Item grow>
          <PrimaryButton
            iconProps={{ iconName: 'CloudDownload' }}
            className='styled-Button'
            text='Download'
            href='https://github.com/rizz-wan/mocktail/archive/refs/heads/master.zip'
            target='_blank'
            rel='noreferrer noopener'
          />
        </Stack.Item>
        <Stack.Item grow>
          <DefaultButton
            iconProps={{ iconName: 'Documentation' }}
            className='styled-Button'
            text='Documentation'
            href='https://github.com/rizz-wan/mocktail#mocktail'
            target='_blank'
            rel='noreferrer noopener'
          />
        </Stack.Item>
        <Stack.Item grow>
          <PrimaryButton
            iconProps={{ iconName: 'OpenSource' }}
            className='styled-Button'
            text='Source'
            href='https://github.com/rizz-wan/mocktail'
            target='_blank'
            rel='noreferrer noopener'
          />
        </Stack.Item>
      </Stack>
    );
  }
}
