import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="/">NG Effective Solutions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/*<Nav.Link href="/LanRoomList">LAN Rooms</Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
