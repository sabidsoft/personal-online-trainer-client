import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Register = () => {
    const [error, setError] = useState('')
    const { signUp, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleOnSubmit = event => {
        event.preventDefault()

        const fullname = event.target.fullname.value
        const photoURL = event.target.photoURL.value
        const email = event.target.email.value
        const password = event.target.password.value

        const profile = {
            displayName: fullname,
            photoURL: photoURL
        }

        if (fullname.length < 3) {
            return setError('Your name is too short!')
        }

        signUp(email, password)
            .then(result => {
                navigate('/')
                event.target.reset()
                updateUserProfile(profile)
                    .then(() => { })
                    .catch(error => console.error('error test:', error))
                setError('')
            })
            .catch(error => {
                if (error.code === 'auth/weak-password') {
                    setError('Password must be 6 characters or more!')
                }
                if (error.code === 'auth/email-already-in-use') {
                    setError('The email already in use!')
                }
            })
    }

    return (
        <div>
            <Container className='mt-5 px-4'>
                <Row>
                    <Col md='8' lg='4' className='mx-auto rounded shadow my-5 p-5'>
                        <h3 className='text-center m-0 mb-5'>Please Register</h3>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicFullname">
                                <Form.Label>Fullname</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='fullname'
                                    placeholder="Enter fullname"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='photoURL'
                                    placeholder="Enter Photo URL"
                                    required
                                />
                            </Form.Group>
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
                            <Button variant="info" type="submit" className='w-100 text-white mb-4'>
                                Register
                            </Button>
                            <p className='text-center m-0'>Have an account? <Link to='/login' className='text-info'>Login</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register