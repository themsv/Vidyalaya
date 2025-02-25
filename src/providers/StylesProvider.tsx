import { PropsWithChildren } from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const theme = createTheme({
  /** Theme override here */
});

function StylesProvider({ children }: Readonly<PropsWithChildren>) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
}

export default StylesProvider;
