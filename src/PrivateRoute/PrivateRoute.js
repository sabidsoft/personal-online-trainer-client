import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import Spinner from 'react-bootstrap/Spinner'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return (
            <div className='vh-100 d-flex justify-content-center align-items-center'>
                <Spinner animation="border" variant="info" />
            </div>
        )
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={location} replace />
}

export default PrivateRoute