import { createSlice } from '@reduxjs/toolkit';
import { fetchCats, fetchMoreCats } from '../thunks/catsThunk';

const initialState = {
  cats: [],
  loadingStatus: 'idle',
  error: null,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.cats = action.payload;
        state.loadingStatus = 'success';
        state.error = null;
      })

      .addCase(fetchCats.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error;
      })
      .addCase(fetchMoreCats.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchMoreCats.fulfilled, (state, action) => {
        state.cats = [...state.cats, ...action.payload];
        state.loadingStatus = 'success';
        state.error = null;
      })
      .addCase(fetchMoreCats.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error;
      });
  },
});

export const { actions } = catsSlice;
export default catsSlice.reducer;
