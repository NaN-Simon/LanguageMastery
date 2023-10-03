import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IExamWord } from '../../components/ExamWord/types';

const LS_FAV_KEY = 'lang-word';

interface WordsState {
  favorites: IExamWord[];
}

const initialState: WordsState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IExamWord>) {
      state.favorites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
    removeFavorite(state, action: PayloadAction<IExamWord>) {
      state.favorites = state.favorites.filter(f => f.en !== action.payload.en)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const languageActions = languageSlice.actions
export const languageReducer = languageSlice.reducer