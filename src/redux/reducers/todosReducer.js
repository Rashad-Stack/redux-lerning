import {
  GET_TODO_FAILED,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "../constants/todoConstants";

const initialState = {
  isLoading: false,
  todoList: [],
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoList: action.payload,
      };
    case GET_TODO_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
