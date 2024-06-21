import { Outlet, RouteObject } from "react-router-dom";

import { PATHS } from "../paths";

import LandingPage from "@app/LandingPage/LandingPage";
import NotFound from "@app/NotFound/NotFound";

export const mainRoutes: RouteObject = {
  element: (
    <>
      <Outlet />
    </>
  ),
  children: [
    {
      path: PATHS.main.path,
      element: LandingPage
    }
  ]
};

export const otherRoutes: RouteObject = {
  element: <Outlet />,
  children: [
    {
      path: PATHS.debug.path,
      element: <div>Debug</div>
    },
    {
      path: PATHS.notFound.path,
      element: NotFound
    }
  ]
};

export const appRoutes: RouteObject = {
  element: (
    <>
      <Outlet />
    </>
  ),
  children: [mainRoutes, otherRoutes]
};
