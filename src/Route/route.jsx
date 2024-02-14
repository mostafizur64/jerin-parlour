import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home/Home/Home";
import Login from "../page/Home/Login/Login";
import Registration from "../page/Home/Registration/Registration";
import Dashboard from "../layouts/Dashboard";
import UserHome from "../page/Dashboard/UserHome/UserHome";
import Buy from "../page/Dashboard/User/Buy";

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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/dashboard", element: <UserHome /> },
      { path: "/dashboard/buy", element: <Buy /> },
      { path: "/dashboard/bookingList", element: 'booking list'},
      { path: "/dashboard/review", element: 'booking review'},
    ],
  },
]);

export default router;
