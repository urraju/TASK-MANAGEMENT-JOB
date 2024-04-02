import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import DashBoard from "../Components/Dashboard/Dashboard";
import Register from "../Pages/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import TaskManagement from "../Components/Dashboard/TaskManagement";
import Update from "../Layout/Update";
import NotFound from "../Layout/NotFound/NotFound";
import UserProfile from "../Components/Dashboard/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "taskmanagement",
        element: <TaskManagement />,
      },
      {
        path: "userprofile",
        element: <UserProfile />,
      },
      {
        path: "update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(
            `https://task-management-job-server.vercel.app/task/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
