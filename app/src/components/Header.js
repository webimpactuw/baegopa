import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Navbar className="main-nav" expand="md">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img id="logo" src="\images/baegopalogo.png" alt="baegopa logo"/>
                    </Navbar.Brand> 
                    <button className="navbar-toggler navbar-dark" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Togglenavigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse my-3" id="navbarNav">
                        <ul className="navbar-nav top-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/menu/appetizers" className="nav-link">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/TOS" className="nav-link">TOS</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
}