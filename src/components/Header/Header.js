import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import { riderContext } from '../../App';
import { useState } from 'react';

const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(riderContext);
    const [loguser, setLoguser] = useState(false);
    
    return (
        <header className="header">
        <Container>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>Urban Rider</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/">Home</Link>
                        <Link to="/destination">Destination</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                        {!loguser && <Link to="/login">Login</Link>}
                        {loguser && loggedInUser.name}
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </header>
    );
};

export default Header;