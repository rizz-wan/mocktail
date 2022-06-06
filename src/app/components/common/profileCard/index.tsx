// Chore: cleanup, for demo purpose only
import { Stack, Image, ITheme, Pivot, PivotItem, Icon } from '@fluentui/react';
import React from 'react';
import { getImageStyles } from 'src/app/styles';
import { IPerson } from 'src/app/types';
import '../style.scss';

export interface IProfileCardProps {
  profile: IPerson;
  theme: ITheme;
  isDataLoading?: boolean;
}
export class ProfileCard extends React.Component<IProfileCardProps> {
  render(): JSX.Element {
    return (
      <>
        <Stack
          className={getImageStyles(this.props.theme)}
          horizontal
          grow
          horizontalAlign='center'
        >
          <div className='image-container'>
            <Image src={this.props.profile.picture.large} />
          </div>
        </Stack>
        <Stack horizontalAlign='center'>
          <Pivot>
            <PivotItem
              className='card-content'
              headerText='About me'
              itemIcon='Contact'
            >
              <div>{`Hi, My name is ${this.props.profile.name.first} ${this.props.profile.name.last}.`}</div>
              <div>
                <Icon iconName='MapPin' />
                {this.props.profile.location.state}
              </div>
            </PivotItem>
            <PivotItem
              headerText='Contacts'
              itemIcon='ContactHeart'
              className='card-content'
            >
              <div>
                <Icon iconName='Mail' />
                {this.props.profile.email}
              </div>
              <div>
                <Icon iconName='Phone' />
                {this.props.profile.phone}
              </div>
              <div>
                <Icon iconName='CellPhone' />
                {this.props.profile.cell}
              </div>
            </PivotItem>
            <PivotItem
              className='card-content'
              headerText='Credential'
              itemIcon='Lock'
            >
              <div>
                <Icon iconName='UserOptional' />
                {`@${this.props.profile.login.username}`}
              </div>
              <div>
                <Icon iconName='Lock' />
                {`XXX${this.props.profile.login.password.slice(3)}`}
              </div>
            </PivotItem>
          </Pivot>
        </Stack>
      </>
    );
  }
}
