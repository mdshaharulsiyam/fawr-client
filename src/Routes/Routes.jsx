import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Platfrom from "../Pages/Platfrom/Platfrom";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/platfrom',
                element: <Platfrom />
            },
        ]
    }
])