import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const isLoggedIn = false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;