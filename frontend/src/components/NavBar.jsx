import { NavLink, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../styling/NavBar.css";
import clawLogo from "../assets/clawLogo.png";

function NavBar() {
  const navigate = useNavigate();


  return (
    <Navbar expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand onClick={() => {navigate("/");}}>
          <img
            alt="Claw Logo"
            src={clawLogo}
            width="100px"
            height="auto"
            className="d-inline-block align-top nav-logo-image"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="w-100 justify-content-around var-font" style={{ "--font": "var(--inter)", "--font-size": "var(--fs-16px)", "--font-weight": "550"}} >
            <Nav.Link onClick={() => {navigate("/");}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate("/Animal Gallery");}}>Animal Gallery</Nav.Link>
            <Nav.Link href="#link">Virtual Adoption</Nav.Link>
            <Nav.Link href="#link">Donations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
