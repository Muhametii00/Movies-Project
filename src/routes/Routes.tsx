import { RouteObject, useRoutes } from "react-router-dom";
import { AuthenticationLayout } from "../components/layout/AuthenticationLayout";
import { DashboardLayout } from "../components/layout/DashboardLayout";

import { Error404, Home, Login, Register } from "../pages";
import { Products } from "../pages/Products";
import { Users } from "../pages/Users";

export const dashboardRoutes: RouteObject[] = [
  {
    element: <AuthenticationLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <Register /> },
    ],
  },

  {
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "users", element: <Users /> },
    ],
  },

  { path: "*", element: <Error404 /> },
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
