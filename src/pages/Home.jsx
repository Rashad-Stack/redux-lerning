import { Box, Heading, Text } from "dracula-ui";
import React from "react";

const Home = () => {
  return (
    <Box p="md">
      <Heading>React Redux toolkit</Heading>
      <Heading size="md">
        <center>
          A{" "}
          <Text className="drac-text-cyan-green" size="lg">
            CRUD
          </Text>{" "}
          Application
        </center>
      </Heading>
    </Box>
  );
};

export default Home;
