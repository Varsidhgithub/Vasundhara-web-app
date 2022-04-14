import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';
import './Header.css';


export default function Header() {
    return (
        <div>
            {/* navbar */}
            <div className='nav-menu'>

                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand className='logo'><img src={logo} className="w-100" alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#" className="me-4 nav-menus1" Active>Home</Nav.Link>
                                <Nav.Link href="#about" className="me-4 nav-menus1">About</Nav.Link>
                                <Nav.Link href="#features" className="me-4 nav-menus1">Features</Nav.Link>
                                <Nav.Link href="#development" className="me-4 nav-menus1">Development</Nav.Link>
                                <Nav.Link href="#help" className="me-4 nav-menus1">Help</Nav.Link>
                                <Nav.Link href="#contact" className="me-4 nav-menus1">Contact</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </div >
    )
}
