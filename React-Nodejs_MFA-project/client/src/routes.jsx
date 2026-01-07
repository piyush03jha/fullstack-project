import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Setup2FA from "./pages/Setup2FA.jsx";
import Verify2FA from "./pages/Verify2FA.jsx";
import ProtectedRoutes from "./component/ProtectedRoutes.jsx";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    element: <ProtectedRoutes/>,
    children: [
    {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/setup-2fa",
    element: <Setup2FA />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/verify-2fa",
    element: <Verify2FA />,
    errorElement: <ErrorPage />,
  },
    ]
  },
  
]);

export default routes;
