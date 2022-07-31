import { initializeIcons } from '@fluentui/react';
import Main from './app/main';
import { Provider } from 'react-redux';
import { configureStoreWithMiddleware, initialRootState } from './store';
import { Router } from 'react-router';
import { defaultTheme, history, ThemeModes } from './utils';

function App() {
  initializeIcons();

  /*Initialize body class with default theme*/
  document.body.classList.add(
    defaultTheme.isInverted ? ThemeModes.Dark : ThemeModes.Light
  );

  const store = configureStoreWithMiddleware(initialRootState);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
