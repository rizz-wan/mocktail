// Chore: cleanup, for demo purpose only
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  ITheme,
  Label,
  SelectionMode,
} from '@fluentui/react';
import React from 'react';
import { IColor } from 'src/app/types';

export interface IColorTableProps {
  data: IColor[] | undefined;
  theme: ITheme;
}

export class ColorTable extends React.Component<IColorTableProps> {
  getColumns(): IColumn[] {
    return [
      {
        key: 'column1',
        name: 'Name',
        fieldName: 'name',
        minWidth: 100,
        maxWidth: 300,
        styles: {
          root: {
            background: this.props.theme.semanticColors.buttonBackgroundPressed,
          },
        },
        onRender: (item: IColor) => {
          return <Label>{item.name}</Label>;
        },
      },
      {
        key: 'column2',
        name: 'Code',
        fieldName: 'code',
        minWidth: 100,
        maxWidth: 300,
        styles: {
          root: {
            background: this.props.theme.semanticColors.buttonBackgroundPressed,
          },
        },
        onRender: (item: IColor) => {
          return <Label>{`#${item.code}`}</Label>;
        },
      },
      {
        key: 'column3',
        name: 'Color',
        fieldName: 'color',
        minWidth: 100,
        styles: {
          root: {
            background: this.props.theme.semanticColors.buttonBackgroundPressed,
          },
        },
        onRender: (item: IColor) => {
          return (
            <div
              style={{
                backgroundColor: `#${item.code}`,
                width: '100%',
                height: '100%',
              }}
            />
          );
        },
      },
    ];
  }

  getItems(): IColor[] {
    let colors: IColor[] = [];
    this.props.data?.forEach((color) => {
      colors.push({
        name: color.name,
        code: color.code,
      });
    });
    return colors;
  }

  render(): JSX.Element {
    return (
      <DetailsList
        items={this.getItems()}
        columns={this.getColumns()}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
      />
    );
  }
}
