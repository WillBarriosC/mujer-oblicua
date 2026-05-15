import { lazy } from "react";
import Compact from "../layout/compact";
import { Outlet } from "react-router-dom";

const NotFound = lazy(() => import("../pages/404"));

export const notFound = [
  {
    element: (
      <Compact>
        <Outlet />
      </Compact>
    ),
    children: [
      {
        path: "404",
        element: <NotFound />,
      },
    ],
  },
];
