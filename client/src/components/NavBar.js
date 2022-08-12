import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom'
const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE} >DivesShop</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'}>Admin panel</Button>
                        <Button variant={'outline-light'} className='ms-2'>Log out</Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Log in</Button>
                    </Nav>
                }
            </Container>
        </Navbar >
    )
})

export default NavBar