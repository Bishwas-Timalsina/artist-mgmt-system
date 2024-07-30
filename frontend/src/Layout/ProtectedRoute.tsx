import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";

const ProtectedRoute = () => {
  const { accessToken } = useAuth();
  if (!accessToken) {
    return <Navigate to="/auth" />;
  } else {
    return <AppLayout />;
  }
};

export default ProtectedRoute;
