import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import AddService from "../pages/AddService"
import Blogs from "../pages/Blogs"
import EditReview from "../pages/EditReview"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Login from "../pages/Login"
import MyReviews from "../pages/MyReviews"
import Register from "../pages/Register"
import Service from "../pages/Service"
import Services from "../pages/Services"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
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
                path: '/add-service',
                element: <PrivateRoute><AddService/></PrivateRoute>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews/></PrivateRoute>
            },
            {
                path: '/edit-review',
                element: <EditReview/>
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router