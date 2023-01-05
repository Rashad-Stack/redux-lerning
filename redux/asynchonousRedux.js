// 'https://jsonplaceholder.typicode.com/todos/1'

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

//constant
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todo";

//state
const initialTodoState = {
  todoList: [],
  isLoading: false,
  error: null,
};

//actions
const getTodoList = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};
const getTodoSuccess = (todo) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: todo,
  };
};
const getTodoListError = (error) => {
  return {
    type: GET_TODO_FAILED,
    payload: error,
  };
};

//reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TODO_SUCCESS:
      return {
        ...state,
        todoList: action.payload,
        isLoading: false,
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

//async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodoList());
    axios
      .get(API_URL)
      .then((res) => {
        dispatch(getTodoSuccess(res.data));
      })
      .catch((error) => {
        dispatch(getTodoListError(error.message));
      });
  };
};

const store = createStore(todoReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchData());
