import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container className="justify-content-between">
        <Navbar.Brand href="/">
          <img src={logo} className="w-auto h-20" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="items-center">
            <Nav.Link
              href="/"
              className="hover:text-cyan-400 font-bold text-gray-400"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="hover:text-cyan-400 font-bold text-gray-400"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/services"
              className="hover:text-cyan-400 font-bold text-gray-400"
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="/faq"
              className="hover:text-cyan-400 font-bold text-gray-400"
            >
              FAQ
            </Nav.Link>
            <Nav.Item className="d-flex align-items-center">
              <Nav.Link href="/estimate" className="p-0">
                <Button variant="primary" className="ml-2">
                  Request Estimate
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
