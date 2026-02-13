import { createBrowserRouter } from "react-router";
import Navbar from "../components/Navbar";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Navbar/>
    }
])

export default router