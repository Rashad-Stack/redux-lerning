import { Box, Heading } from "dracula-ui";
import "dracula-ui/styles/dracula-ui.css";
import CounterView from "./features/counter/CounterView";

function App() {
  return (
    <Box
      className="drac-bg-purple-cyan"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "auto",
      }}
    >
      <Box p="md">
        <Heading>React Redux toolkit</Heading>
      </Box>
      <CounterView />
    </Box>
  );
}

export default App;
