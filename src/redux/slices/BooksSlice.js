import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  books: [
    {
      id: uuid(),
      title: "Love Bangladesh",
      author: "Rashadul Islam",
      categories: "Web development",
      language: "Bengal",
    },
    {
      id: uuid(),
      title: "Agile Web Development with Rails",
      author: "David Heinemeier Hansson",
      categories: "pyhton development",
      language: "english",
    },
    {
      id: uuid(),
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
    deleteBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook(state, action) {
      console.log("🚀 ~ file: BooksSlice.js:44 ~ updateBook ~ action", action);
      const isBookExist = state.books.filter(
        (book) => book.id === action.payload.id
      );
      if (isBookExist) {
        isBookExist.forEach((books) => {
          books.title = action.payload.bookName;
          books.author = action.payload.author;
          books.category = action.payload.category;
          books.language = action.payload.language;
        });
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
