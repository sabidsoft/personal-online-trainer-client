import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Blogs from "../pages/Blogs"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Services from "../pages/Services"
// import DOMAIN_NAME from "../utilities/DOMAIN_NAME"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <p>Error Page</p>,
        children: [
            {
                path: '/',
                element: <Home/>,
                
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

export default router