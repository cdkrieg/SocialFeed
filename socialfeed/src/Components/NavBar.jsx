import React from "react";
import "../App";
import { Navbar } from "react-bootstrap";
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar id="navbar" bg="dark" variant="dark">
      <Navbar.Brand  id="navbarBrand">Social Feed</Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
