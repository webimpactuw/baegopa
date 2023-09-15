import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        // <header>
        //     <Navbar expand="md" className="main-nav">
        //         <Container fluid>
        //             <Navbar.Brand href="index.html">
        //                 <img id="logo" src="images/baegopalogo.png" alt="Baegopa Logo" />
        //             </Navbar.Brand>
        //             <Navbar.Toggle aria-controls="navbarNav" />
        //             <Navbar.Collapse id="navbarNav">
        //                 <Nav className="top-nav ms-auto">
        //                     <Nav.Item>
        //                         <Nav.Link href="index.html" className="nav-link active">Home</Nav.Link>
        //                     </Nav.Item>
        //                     <Nav.Item>
        //                         <Nav.Link href="Appetizer.html" className="nav-link">Menu</Nav.Link>
        //                     </Nav.Item>
        //                     <Nav.Item>
        //                         <Nav.Link href="TOS.html" className="nav-link">AYCE</Nav.Link>
        //                     </Nav.Item>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </header>
        <header>
            <nav className="navbar navbar-expand-md main-nav">
                <div className="container-fluid">
                    <a href="index.html" className="navbar-brand mb-0"><img id="logo" src="images/baegopalogo.png" /></a>
                    <button className="navbar-toggler navbar-dark" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Togglenavigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse my-3" id="navbarNav">
                        <ul className="navbar-nav top-nav ms-auto">
                            <li className="nav-item">
                                <a href="index.html" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="Appetizer.html" className="nav-link">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a href="TOS.html" className="nav-link">AYCE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}