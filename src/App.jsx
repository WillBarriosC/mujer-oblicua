import { RouterProvider } from "react-router-dom";
import { ThemeConfig } from "./config/theme.config";
import { LazyMotion, domAnimation } from "framer-motion";
import { router } from "./routes/sections";
import { memo, useMemo } from "react";

const App = memo(() => {
  const memoizedRouter = useMemo(() => router, []);

  return (
    <ThemeConfig>
      <LazyMotion features={domAnimation}>
        <RouterProvider router={memoizedRouter} />
      </LazyMotion>
    </ThemeConfig>
  );
});

App.displayName = "App";

export default App;
