import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { themes } from "lib/utils/themes";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" themes={themes}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
