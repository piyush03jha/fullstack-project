import { Outlet, Navigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const ProtectedRoutes = () => {
    const { isLoggedIn, loading } = useSession();
    console.log("The Logged In: ", isLoggedIn);
    if (loading) {
        return <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>;
    }
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;