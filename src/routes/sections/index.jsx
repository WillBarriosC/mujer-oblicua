import { Navigate, createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./main";
import { notFound } from "./notFound";

export const router = createBrowserRouter([
  ...mainRoutes,
  ...notFound,

  { path: "*", element: <Navigate to="/404" replace/> },
]);
