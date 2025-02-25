import { PropsWithChildren } from "react";

import ApiProvider from "./ApiProvider";
import StylesProvider from "./StylesProvider";
import { AuthProvider } from "./AuthProvider";

function RootProvider({ children }: Readonly<PropsWithChildren>) {
  return (
    <ApiProvider>
      <StylesProvider>
        <AuthProvider />
        {children}
      </StylesProvider>
    </ApiProvider>
  );
}
export default RootProvider;
