import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './Auth/AuthSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
}


const store = configureStore({
    reducer: {
        user: persistReducer(authPersistConfig, userReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store)

export { store, persistor };
