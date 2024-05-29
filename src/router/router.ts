import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";



export const routerConfig = createBrowserRouter(  [
    {
        path:"/",
        element: <MainLayout />,
        cildren: [
            {
                path:"register",
                element: <Register />,
            },
            {
                path:"login",
                element:<Login/>

            }

        ]
    }
        ])