import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default MyApp;
