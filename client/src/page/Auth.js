import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utils/consts'
const Auth = () => {
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ heigth: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='s-auto'>Log in</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='enter email'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='enter password'
                    />
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        <div>
                            Have no account?<NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                        </div>
                        <Button
                            variant='outline-success'>
                            Enter
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    )
}

export default Auth