import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../page/About/About";
import Career from "../page/Career/Career";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import LoginPage from "../page/LoginPage/LoginPage";
import RegisterPage from "../page/RegisterPage/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("/news.json"),
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);

export default router;
