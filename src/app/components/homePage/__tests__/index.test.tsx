import { HomePage, IHomePageProps, mapStateToProps } from '../index';
import { render } from '@testing-library/react';
import { defaultTheme } from 'src/utils';
import { initialRootState } from 'src/store';

const setupProps = (): IHomePageProps => {
  const props: IHomePageProps = {
    theme: defaultTheme,
  };

  return props;
};

describe('Snapshot tests', () => {
  it('Should render home page', () => {
    const props = setupProps();
    const result = render(<HomePage {...props} />);
    expect(result).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
});

describe('Render tests', () => {
  it('should map state to props', () => {
    const mapStateToPropsResult: IHomePageProps = {
      theme: defaultTheme,
    };

    const result: IHomePageProps = mapStateToProps(initialRootState);
    expect(result).toEqual(mapStateToPropsResult);
  });
});
