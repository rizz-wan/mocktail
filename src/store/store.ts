import {
  AnyAction,
  CombinedState,
  configureStore,
  Dispatch,
  EnhancedStore,
  Middleware,
} from '@reduxjs/toolkit';
import {
  createRootReducer,
  createRootReducerWithHistory,
  IRootState,
} from '../store';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import { history } from 'src/utils';

export function configureStoreWithMiddleware(
  initialState: IRootState
): EnhancedStore<
  CombinedState<{}>,
  AnyAction,
  Middleware<Record<string, unknown>, unknown, Dispatch<AnyAction>>[]
> {
  const middleware = [] as Middleware[];
  const sagaMiddleware = createSagaMiddleware();
  const { run: runSaga } = sagaMiddleware;
  const enhancers = [
    createInjectorsEnhancer({
      runSaga: runSaga,
      createReducer: createRootReducerWithHistory(history),
    }),
  ];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require(`redux-logger`);
    middleware.push(logger);
  }

  middleware.push(sagaMiddleware);

  const store = configureStore({
    preloadedState: initialState,
    reducer: createRootReducer({}, history),
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      ...middleware,
    ],
    enhancers,
  });

  return store;
}
