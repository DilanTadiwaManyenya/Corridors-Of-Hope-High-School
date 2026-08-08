import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Staff from "./pages/Staff";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/academics", element: <Academics /> },
      { path: "/admissions", element: <Admissions /> },
      { path: "/student-life", element: <StudentLife /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/news", element: <News /> },
      { path: "/staff", element: <Staff /> },
      { path: "/facilities", element: <Facilities /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
