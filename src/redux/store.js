import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todosReducer";

const allReducer = combineReducers({
  counter: counterReducer,
  todoList: todoReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));
export default store;
