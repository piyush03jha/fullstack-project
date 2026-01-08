import "./App.css";
import { RouterProvider } from "react-router-dom";
import  routes  from "./routes.jsx";
import { SessionProvider } from "./context/SessionContext.jsx";


const App = () => {
  return (
    <div className="h-screen bg-slate-900">
      <div className="flex justify-center items-center h-screen">
        <SessionProvider>
          <RouterProvider router={routes} />
        </SessionProvider>

      </div>
      
    </div>
  )
}

export default App