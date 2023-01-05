import { Box } from "dracula-ui";
import "dracula-ui/styles/dracula-ui.css";

import Counter from "./components/counter";
function App() {
  return (
    <Box
      className="drac-bg-purple-cyan"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Counter />
    </Box>
  );
}

export default App;
