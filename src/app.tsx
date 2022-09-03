import { initializeIcons } from '@fluentui/react';
import Main from './app/main';
import { Provider } from 'react-redux';
import { configureStoreWithMiddleware, initialRootState } from './store';
import { Router } from 'react-router';
import { history, setInitialThemeClassToBody } from './utils';

function App() {
  initializeIcons();

  setInitialThemeClassToBody();

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
