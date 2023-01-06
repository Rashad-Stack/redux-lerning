import { configureStore } from "@reduxjs/toolkit";

import { BooksSlice } from "./slices";

const store = configureStore({
  reducer: {
    booksReducer: BooksSlice,
  },
});

export default store;
