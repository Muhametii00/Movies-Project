import { RouteObject, useRoutes } from "react-router-dom";

import { Home, Login } from "../pages";

export const dashboardRoutes: RouteObject[] = [
  { path: "login", element: <Login /> },
  { path: "/", element: <Home /> },
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
