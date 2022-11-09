import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Blogs from "../pages/Blogs"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Service from "../pages/Service"
import Services from "../pages/Services"
import DOMAIN_NAME from "../utilities/DOMAIN_NAME"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />,

            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/services/:id',
                element: <Service/>,
                loader: ({params}) => fetch(`${DOMAIN_NAME}/services/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router