import React from "react";
import "../App";
import { Navbar } from "react-bootstrap";
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar id="navbar" >
      <Navbar.Brand  id="navbarBrand">Social Feed</Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
