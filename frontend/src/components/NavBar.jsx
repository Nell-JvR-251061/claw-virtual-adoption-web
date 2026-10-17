import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthManager";

import {
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import "../styling/NavBar.css";
import clawLogo from "../assets/clawLogo.webp";

function NavBar() {
  const { user } = useAuth();
  const { Logout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const activePage = location.pathname;

  const LoggingOut = () => {
    Logout();
    navigate("/");
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Log Out?
    </Tooltip>
  );

  return (
    <Navbar expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            alt="Claw Logo"
            src={clawLogo}
            width="120px"
            height="auto"
            className="d-inline-block align-top nav-logo-image"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className=" justify-content-evenly var-font"
            style={{
              "--font": "var(--inter)",
              "--font-size": "var(--fs-16px)",
              "--font-weight": "550",
              width: "90%",
            }}
          >
            <Nav.Link
              style={
                activePage === "/"
                  ? { color: "var(--blue)" }
                  : { color: "black" }
              }
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={
                activePage === "/AnimalGallery"
                  ? { color: "var(--blue)" }
                  : { color: "black" }
              }
              onClick={() => {
                navigate("/AnimalGallery");
              }}
            >
              Animal Gallery
            </Nav.Link>
            <Nav.Link
              style={
                activePage === "/VirtualAdoption"
                  ? { color: "var(--blue)" }
                  : { color: "black" }
              }
              onClick={() => {
                navigate("/VirtualAdoption");
              }}
            >
              Virtual Adoption
            </Nav.Link>
            {/* <Nav.Link
              style={activePage === "/" ? "active-page" : ""}
              href="#link"
            >
              Donations
            </Nav.Link> */}
          </Nav>
          <Nav
            className="var-font"
            style={{
              "--font": "var(--inter)",
              "--font-size": "var(--fs-16px)",
              "--font-weight": "550",
            }}
          >
            {!user ? (
              <Nav.Link
                id="login-link"
                onClick={() => {
                  navigate("/Login");
                }}
              >
                Login
              </Nav.Link>
            ) : (
              <Nav.Link id="logout-link" onClick={LoggingOut}>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 100, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <span>{user.name}</span>
                </OverlayTrigger>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
