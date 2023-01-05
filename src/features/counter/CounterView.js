import { Box, Button, Divider, Heading } from "dracula-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseAmount, increment, reset } from "./counterSlice";

const CounterView = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Box>
      <Box>
        <Heading size="2xl">Count: {count}</Heading>
      </Box>
      <Box>
        <Box mb="sm">
          <Divider color="green" />
        </Box>
        <Box p="md">
          <Button color="purple" onClick={() => dispatch(increment())}>
            Increment
          </Button>
        </Box>
        <Box p="md">
          <Button color="purple" onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
        </Box>
        <Box p="md">
          <Button color="purple" onClick={() => dispatch(increaseAmount(5))}>
            Increase Amount
          </Button>
        </Box>
        <Box p="md">
          <Button color="purple" onClick={() => dispatch(reset())}>
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

export default CounterView;
