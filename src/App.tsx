import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Theme } from "./components/layout/Theme";

import { Routes } from "./routes/Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ display: "flex" }}>
          <Routes />
        </Box>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
