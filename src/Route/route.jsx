import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home/Home/Home";
import Login from "../page/Home/Login/Login";
import Registration from "../page/Home/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
    ],
  },
]);

export default router;
