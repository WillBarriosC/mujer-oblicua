import { RouterProvider } from "react-router-dom";
import { ThemeConfig } from "./config/theme.config";
import { LazyMotion, domAnimation } from "framer-motion";
import { router } from "./routes/sections";
import { memo } from "react";

const App = memo(() => (
  <ThemeConfig>
    <LazyMotion features={domAnimation}>
      <RouterProvider router={router} />
    </LazyMotion>
  </ThemeConfig>
));

App.displayName = "App";

export default App;