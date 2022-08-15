import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ heigth: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='s-auto'>{isLogin ? 'Log in' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='enter email'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='enter password'
                    />
                    <div className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ?
                            <div>
                                Have no account?<NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                            :
                            <div>
                                Have an account?<NavLink to={LOGIN_ROUTE}>Log in</NavLink>
                            </div>
                        }

                        <Button variant='outline-success'>
                            {isLogin ?
                                'Enter'
                                :
                                'Register'
                            }
                        </Button>
                    </div>

                </Form>
            </Card>
        </Container>
    )
}

export default Auth