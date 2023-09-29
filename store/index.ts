import {configureStore} from '@reduxjs/toolkit';
import sessionsReducer from './features/sessions/sessionsSlice';

export const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
