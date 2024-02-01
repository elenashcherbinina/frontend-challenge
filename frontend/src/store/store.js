import { configureStore } from '@reduxjs/toolkit';
import catsReducer from './slices/catsSlice';

const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
});

export default store;
