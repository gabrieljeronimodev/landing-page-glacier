import { createRouter, createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IndexPage from "./routes/index";

const queryClient = new QueryClient();

// Root route provides QueryClient and renders children via Outlet
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
});

// Index route maps to "/"
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

export const routeTree = rootRoute.addChildren([indexRoute]);

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
}
