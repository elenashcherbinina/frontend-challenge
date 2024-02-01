import { createAsyncThunk } from '@reduxjs/toolkit';
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchCats = createAsyncThunk('cats/fetchCats', async () => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  });

  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?&limit=10',
    requestOptions,
  );

  return await response.json();
});

export const fetchMoreCats = createAsyncThunk(
  'cats/fetchMoreCats',
  async () => {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    });

    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow',
    };

    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?&limit=10',
      requestOptions,
    );

    return await response.json();
  },
);
