import { Box, Divider, Heading } from "dracula-ui";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodo } from "../../redux/actions/todosActions";
import Loader from "../loader";

const ReduxToolKit = () => {
  const { isLoading, error, todoList } = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  return (
    <Box p="sm">
      <Heading size="2xl">Todo's</Heading>
      <Divider />
      <Box>
        {error && (
          <Heading size="xl" color="red">
            error
          </Heading>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {todoList.map((todo) => (
              <Box key={todo.id} mb="sm">
                <Heading size="xl">{todo.title}</Heading>
                <Divider color="red" />
              </Box>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default ReduxToolKit;
