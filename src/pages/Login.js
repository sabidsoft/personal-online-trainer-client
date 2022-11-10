import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import DOMAIN_NAME from '../utilities/DOMAIN_NAME'
import useTitle from '../hooks/useTitle'

const Login = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    useTitle('Login')
    const location = useLocation()

    const handleOnSubmit = event => {
        setLoading(true)
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        login(email, password)
            .then(result => {
                const user = result.user
                const currentUserEmail = {
                    email: user.email
                }
                fetch(`${DOMAIN_NAME}/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUserEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('auth-token', data.token)
                        navigate(location.state?.pathname || '/', { replace: true })
                        setError('')
                        event.target.reset()
                        setLoading(false)
                    })
                    .catch(err => {
                        setLoading(false)
                    })
            })
            .catch(error => {
                setLoading(false)
                if (error.code === 'auth/wrong-password') {
                    setError(`Email address or password didn't match!`)
                }
                if (error.code === 'auth/user-not-found') {
                    setError(`Email address or password didn't match!`)
                }
                if (error.code === 'auth/too-many-requests') {
                    setError('Too many request! Try later.')
                }
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate(location.state?.pathname || '/', { replace: true })
            })
            .catch(error => {
                if (error.code === 'auth/internal-error') {
                    setError('Something went wrong.')
                }
            })
    }

    return (
        <>
            {
                loading ? (
                    <div className='vh-100 d-flex justify-content-center align-items-center'>
                        <Spinner animation="border" variant="info" />
                    </div>
                ) : (
                    <>
                        <Container className='mt-5 px-4'>
                            <Row>
                                <Col md='8' lg='4' className='mx-auto rounded shadow my-5 p-5'>
                                    <h3 className='text-center m-0 mb-5'>Please Login</h3>
                                    <Form onSubmit={handleOnSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name='email'
                                                placeholder="Enter email"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name='password'
                                                placeholder="Password"
                                                required
                                            />
                                        </Form.Group>
                                        {
                                            error && <p className='text-center text-danger'>{error}</p>
                                        }
                                        <Button variant="info" type="submit" className='w-100 text-white'>
                                            Login
                                        </Button>
                                        <div className='d-flex align-items-center'>
                                            <div className='line'></div>
                                            <p className='mx-3 pt-3'>or</p>
                                            <div className='line'></div>
                                        </div>
                                        <Button onClick={handleGoogleSignIn} variant="outline-info" className='w-100 mb-5 text-muted'><FcGoogle size={24} className='me-2' />Sign in with Google</Button>
                                        <p className='text-center m-0'>Don't have an account? <Link to='/register' className='text-info'>Register Now</Link></p>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </>
                )
            }
        </>
    )
}

export default Login