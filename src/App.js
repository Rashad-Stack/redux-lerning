import { Box, Heading } from "dracula-ui";
import "dracula-ui/styles/dracula-ui.css";

import PostsView from "./features/posts/PostsView";

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
      <PostsView />
    </Box>
  );
}

export default App;
