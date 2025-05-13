import { createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./main";
import NotFoundRoute from "./notFound";

export const router = createBrowserRouter([
  ...mainRoutes,
  NotFoundRoute(),
]);
