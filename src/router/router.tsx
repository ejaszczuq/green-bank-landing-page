import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { appRoutes } from "./routes/app.routes";

export const router = createBrowserRouter([appRoutes]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
