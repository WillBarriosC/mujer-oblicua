/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../layout";
import Loading from "../../components/Loading";

const HomePage = lazy(() => import("../../components/SectionLinks"));

const Intro = lazy(() => import("../../pages/intro"));
const MujerOblicuaPage = lazy(() => import("../../pages/mujer-oblicua"));
const LecturaCoralPage = lazy(() => import("../../pages/lectura-coral"));
const OlasDeHorasPage = lazy(() => import("../../pages/olas-de-horas"));
const AboutMe = lazy(() => import("../../pages/about"));

export const mainRoutes = [
  {
    element: (
      <Layout>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "intro",
        element: <Intro />,
      },
      {
        path: "libro-expandido",
        element: <MujerOblicuaPage />,
      },
      {
        path: "lectura-coral",
        element: <LecturaCoralPage />,
      },
      {
        path: "olas-de-horas",
        element: <OlasDeHorasPage />,
      },
      {
        path: "acerca-de-mi",
        element: <AboutMe />,
      },
    ],
  },
];
