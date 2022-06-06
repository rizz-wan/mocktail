// Chore: cleanup, for demo purpose only
import { FontIcon, Link } from '@fluentui/react';
import { Component } from 'react';

export interface IExternalLinkProps {
  text: string;
  linkTo: string;
}

export class ExternalLink extends Component<IExternalLinkProps> {
  render(): JSX.Element {
    return (
      <Link href={this.props.linkTo} target='_blank' rel='noreferrer noopener'>
        <strong>{this.props.text}</strong>
        <FontIcon iconName='NavigateExternalInline' />
      </Link>
    );
  }
}
