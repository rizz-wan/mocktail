import { Route, Switch } from 'react-router-dom';
import HomePage from './components/homePage';
import PhpMysql from './components/phpMysql';
import WebApi from './components/webApi';
import { ThemeProvider } from '@fluentui/react';
import Header from './components/header';
import Footer from './components/footer';
import { GetCurrentTheme } from 'src/utils';
import { Helmet } from 'react-helmet';

function Main() {
  const themeMode = GetCurrentTheme();

  return (
    <ThemeProvider theme={themeMode}>
      <Helmet defaultTitle='Mocktail' titleTemplate='%s - Mocktail'></Helmet>
      <Header />
      <Switch>
        {/* Chore: cleanup, for demo purpose only */}
        <Route
          path={'/phpMysql'}
          render={(): JSX.Element => {
            return <PhpMysql />;
          }}
        />
        {/* Chore: cleanup, for demo purpose only */}
        <Route
          path={'/webApi'}
          render={(): JSX.Element => {
            return <WebApi />;
          }}
        />
        <Route
          path={'/'}
          render={(): JSX.Element => {
            return <HomePage />;
          }}
        />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default Main;
