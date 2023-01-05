import { Box, Button, Divider, Heading } from "dracula-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../redux/actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleCounter = () => {
    dispatch(incrementCounter());
  };
  const handleDecrementCounter = () => {
    dispatch(decrementCounter());
  };
  const handleResetCounter = () => {
    dispatch(resetCounter());
  };

  return (
    <Box>
      <Box>
        <Heading size="2xl">Count {count}</Heading>
      </Box>
      <Box>
        <Box mb="sm">
          <Divider color="green" />
        </Box>
        <Box p="md">
          <Button color="purple" onClick={handleCounter}>
            Increment
          </Button>
        </Box>
        <Box p="md">
          <Button color="purple" onClick={handleDecrementCounter}>
            Decrement
          </Button>
        </Box>
        <Box p="md">
          <Button color="purple" onClick={handleResetCounter}>
            Reset
          </Button>
        </Box>
        <Box mb="sm">
          <Divider color="green" />
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
