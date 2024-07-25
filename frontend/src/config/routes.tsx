import { Navigate, RouteObject } from "react-router-dom";
import AuthLayout from "../Layout.tsx/AuthLayout";
import Login from "../components/AuthComponent/Login";
import { Register } from "../components/AuthComponent/Register";
import AppLayout from "../Layout.tsx/AppLayout";
import UserPage from "../pages/UserPage";
import SongPage from "../pages/SongPage";
import ArtistPage from "../pages/ArtistPage";
import NotFoundPage from "../pages/NotFoundPage";
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
  element: <AppLayout />,
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
