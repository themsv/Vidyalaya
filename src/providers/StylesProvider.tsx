import { PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

function StylesProvider({ children }: Readonly<PropsWithChildren>) {
  return <MantineProvider>{children}</MantineProvider>;
}

export default StylesProvider;
