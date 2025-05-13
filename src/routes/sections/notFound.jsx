import { lazy } from "react";
import Compact from "../../layout/compact";

const NotFound = lazy(() => import("../../pages/404"));

const NotFoundRoute = () => ({
  path: "*",
  element: (
    <Compact>
      <NotFound />
    </Compact>
  ),
});

export default NotFoundRoute;
