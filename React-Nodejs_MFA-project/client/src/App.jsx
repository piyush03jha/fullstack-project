import "./App.css";
import { RouterProvider } from "react-router-dom";
import  routes  from "./routes.jsx";


const App = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-screen">
        <RouterProvider router={routes}>

        </RouterProvider>
      </div>
      
    </div>
  )
}

export default App