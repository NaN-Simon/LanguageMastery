import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { languageReducer } from './languageLearning/language.slice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
  }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
