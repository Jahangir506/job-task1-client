import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Dashboard from "../layouts/Dashboard";
import MainLayouts from "../layouts/MainLayouts";
import MangeTask from "../pages/Dashboard/MangeTask";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: '/dashboard/manageTask',
                element: <MangeTask/>
            }
        ]

    }
])
export default router;