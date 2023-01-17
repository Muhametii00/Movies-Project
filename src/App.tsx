import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Theme } from "./components/layout/Theme";
import { ToastContainer } from "react-toastify";
import { Routes } from "./routes/Routes";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ display: "flex" }}>
          <Routes />
        </Box>
        <ToastContainer />
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
