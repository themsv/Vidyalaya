import React, { createContext, useState } from "react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "../routeTree.gen";
import { initialAuth } from "../utils/useAuth";

const queryClient = new QueryClient();
export const isDev = import.meta.env.MODE === "development";

const TanStackRouterDevtools = !isDev
  ? () => null // Render nothing in production
  : React.lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    );

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    queryClient,
    auth: undefined!, // This will be set after we wrap the app in an AuthProvider
  },
});
// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export interface IAuthContext {
  isAuthenticated: boolean;
  secret: UserToken;
  setSecret: (val: UserToken | ((prevState: UserToken) => UserToken)) => void;
}

interface UserToken {
  id: string;
  email: string;
  iat: number;
  exp: number;
}
export const AuthContext = createContext<IAuthContext>(initialAuth);

export function AuthProvider() {
  const [userInfo, setUserInfo] = useState<UserToken>(initialAuth.secret);

  const auth = {
    isAuthenticated: userInfo.exp > Date.now() / 1000,
    secret: userInfo,
    setSecret: setUserInfo,
  };

  return (
    <AuthContext.Provider value={auth}>
      <RouterProvider router={router} context={{ auth }} />
      <TanStackRouterDevtools router={router} />
    </AuthContext.Provider>
  );
}
