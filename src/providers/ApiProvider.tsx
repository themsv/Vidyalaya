import { PropsWithChildren, useEffect } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import axios from "axios";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
    mutations: {
      retry: 1,
    },
  },
});

function ApiProvider({ children }: Readonly<PropsWithChildren>) {
  useEffect(() => {
    // Set default headers
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers["Accept"] = "application/json";
    axios.defaults.headers["Cache-Control"] = "no-cache";
    axios.defaults.headers["timezone-identifier"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone;
    axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
    axios.defaults.withCredentials = true;
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ApiProvider;
