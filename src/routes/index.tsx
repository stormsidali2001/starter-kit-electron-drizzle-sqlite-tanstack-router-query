import { Router, Route, RootRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import DashboardPage from "@/components/dashboard/DashboardPage";
import AboutPage from "@/pages/AboutPage";
import SettingsPage from "@/pages/SettingsPage";
import HelpPage from "@/pages/HelpPage";

// Define the root route
const rootRoute = new RootRoute({
  component: AppLayout,
});

// Define the dashboard route (index/home)
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: DashboardPage,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const settingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
});

const helpRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/help",
  component: HelpPage,
});

// Register all routes
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  settingsRoute,
  helpRoute,
]);

// Create the router instance
export const router = new Router({ routeTree });

// Register router types
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

