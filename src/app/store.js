import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsslice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
  },
});

export default store;
