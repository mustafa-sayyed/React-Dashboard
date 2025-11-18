import { createBrowserRouter, Navigate } from "react-router";
import {
  Home,
  Login,
  MyBooks,
  NotFound,
  Profile,
  AddBooks,
  Signup,
} from "./pages";
import DashboardLayout from "./Layout/DashboardLayout";
import AuthLayout from "./Layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "add-books",
        element: <AddBooks />,
      },
      {
        path: "my-books",
        element: <MyBooks />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to={"/dashboard/home"} replace={true} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
