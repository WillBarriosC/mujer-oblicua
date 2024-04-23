import { RouterProvider } from "react-router-dom";
import { ThemeConfig } from "./config/theme.config";
import { LazyMotion, domAnimation } from "framer-motion";
import { router } from "./routes/sections";

function App() {
  return (
    <>
      <ThemeConfig>
        <LazyMotion features={domAnimation} strict>
          <RouterProvider router={router} />
        </LazyMotion>
      </ThemeConfig>
    </>
  );
}

export default App;
