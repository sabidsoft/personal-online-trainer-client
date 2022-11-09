import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import logo from '../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Menubar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err.code))
    }
    return (
        <Navbar variant='dark' expand="lg" className='bg-zero py-3 position-sticky top-0'>
            <Container>
                <Navbar.Brand className='d-flex align-items-center'>
                    <Link to='/'>
                        <Image
                            src={logo}
                            width={28}
                        />
                    </Link>
                    <Link to='/' className='ms-3 text-decoration-none text-white'>Personal Fitness Trainer</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to='/' className='text-decoration-none text-white mt-4 mb-2 mt-lg-0 mb-lg-0'>Home</NavLink>
                        <NavLink to='/services' className='text-decoration-none text-white ms-lg-4 mb-2 mb-lg-0'>Services</NavLink>
                        <NavLink to='/blogs' className='text-decoration-none text-white ms-lg-4 mb-2 mb-lg-0'>Blogs</NavLink>
                        {
                            user ? (
                                <>
                                    <NavLink to='/my-reviews' className='text-decoration-none text-white ms-lg-4 mb-2 mb-lg-0'>My reviews</NavLink>
                                    <NavLink to='/add-service' className='text-decoration-none text-white ms-lg-4 mb-2 mb-lg-0'>Add service</NavLink>
                                    <NavLink onClick={handleLogout} className='text-decoration-none text-white ms-lg-4 mb-2 mb-lg-0'>Logout</NavLink>
                                </>
                            ) : (
                                <NavLink to='/login' className='text-decoration-none text-white ms-lg-4 mb-2 mb-lg-0'>Login</NavLink>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menubar;