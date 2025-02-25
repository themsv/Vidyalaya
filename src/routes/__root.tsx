import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { AppShell, Button, Group } from "@mantine/core";
import type { QueryClient } from "@tanstack/react-query";
import { IconLogin, IconLogout, IconBooks } from "@tabler/icons-react";
import { IAuthContext } from "../providers/AuthProvider";
import useAuth from "../utils/useAuth";
import ColorSwitch from "../ui-core/ColorSwitch";

type MyRootContext = {
  auth: IAuthContext;
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<MyRootContext>()({
  component: RootLayout,
});

function RootLayout() {
  return (
    <AppShell header={{ height: 72 }}>
      <AppHeader />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

function AppHeader() {
  const { isAuthenticated } = useAuth();
  return (
    <AppShell.Header>
      <Group p="lg" justify="space-between">
        <Link to={"/"}>
          <IconBooks size={38} />
        </Link>
        <Group>
          <ColorSwitch />
          {isAuthenticated ? (
            <Link to="/">
              <Button variant="outline" rightSection={<IconLogout size={24} />}>
                Logout
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="outline" rightSection={<IconLogin size={24} />}>
                Login
              </Button>
            </Link>
          )}
        </Group>
      </Group>
    </AppShell.Header>
  );
}
