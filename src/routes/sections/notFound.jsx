import {lazy } from "react";
import { Outlet } from "react-router-dom";
import Compact from "/src/layout/compact";

const NotFound = lazy(() => import("../../pages/404"));

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
