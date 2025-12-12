import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HomePage from "./components/HomePage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {import.meta.env.DEV && <ReactQueryDevtools />}
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
