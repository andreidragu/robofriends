import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

let sagaTask = sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducer', () => store.replaceReducer(rootReducer));
  module.hot.accept('./saga', () => {
    const newRootSaga = require('./saga').default;
    sagaTask.cancel();
    sagaTask.toPromise().then(() => {
      sagaTask = sagaMiddleware.run(newRootSaga);
    });
  });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {robots: RobotsState}
export type AppDispatch = typeof store.dispatch;

export default store;
