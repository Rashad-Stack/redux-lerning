import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: "1",
      title: "Love Bangladesh",
      author: "Rashadul Islam",
      categories: "Web development",
      language: "Bengal",
    },
    {
      id: "2",
      title: "Agile Web Development with Rails",
      author: "David Heinemeier Hansson",
      categories: "pyhton development",
      language: "english",
    },
    {
      id: "3",
      title: "Flask Web Development",
      author: "Miguel Grinberg",
      categories: "Web site development",
      language: "portages",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    showBooks(state) {
      return state;
    },
    addBook(state, action) {
      state.books.push(action.payload);
    },
  },
});

export const { showBooks, addBook } = booksSlice.actions;
export default booksSlice.reducer;
