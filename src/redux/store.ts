import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksRedux';

const store = configureStore({
  reducer: {
    books: booksReducer,
  }
});

export default store;
