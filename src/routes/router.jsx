import { createBrowserRouter } from "react-router";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Todolist from "../pages/Todolist";
import Tokenprofile from "../pages/Tokenprofile";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Navbar/>,
        children:[{
            index:true,
            element:<Login/>
        },{
            path:"/register",
            element:<Register/>
        },{
            path:"/todolist",
            element:<Todolist/>
        },{
            path:"/tokenprofile",
            element:<Tokenprofile/>
        }
    ]
    }
])

export default router