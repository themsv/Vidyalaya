import { PropsWithChildren } from "react";

import ApiProvider from "./ApiProvider";
import StylesProvider from "./StylesProvider";

function RootProvider({ children }: Readonly<PropsWithChildren>) {
  return (
    <ApiProvider>
      <StylesProvider>{children}</StylesProvider>
    </ApiProvider>
  );
}
export default RootProvider;
