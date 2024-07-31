import { Navigate, RouteObject } from "react-router-dom";
import Login from "../components/AuthComponent/Login";
import Register from "../components/AuthComponent/Register";
import AuthLayout from "../Layout/AuthLayout";
import ProtectedRoute from "../Layout/ProtectedRoute";
import ArtistPage from "../pages/Artist/ArtistPage";
import NotFoundPage from "../pages/NotFoundPage";
import SongPage from "../pages/Song/SongPage";
import UserPage from "../pages/User/UserPage";
import { APP, ARTIST, AUTH, LOGIN, REGISTER, SONG, USER } from "./path";

export const AuthRoutes: RouteObject = {
  path: AUTH,
  element: <AuthLayout />,
  children: [
    {
      path: LOGIN,
      element: <Login />,
    },
    {
      path: REGISTER,
      element: <Register />,
    },
  ],
};

export const AppRoutes: RouteObject = {
  path: APP,
  element: <ProtectedRoute />,
  children: [
    {
      path: USER,
      element: <UserPage />,
    },
    {
      path: ARTIST,
      element: <ArtistPage />,
    },
    {
      path: SONG,
      element: <SongPage />,
    },
  ],
};

export const NotFoundRoutes: RouteObject = {
  path: "",
  element: <NotFoundPage />,
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={`/${AUTH}/${LOGIN}`} />,
  },
  {
    path: "/auth",
    element: <Navigate to={`/${AUTH}/${LOGIN}`} />,
  },
  {
    path: "/app",
    element: <Navigate to={`/${APP}/${USER}`} />,
  },

  AuthRoutes,
  AppRoutes,
  NotFoundRoutes,
];
export default routes;
