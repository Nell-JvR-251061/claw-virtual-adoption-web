import { useState } from "react";
import { Nav } from "react-bootstrap";

function Dashboard() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Nav className="flex-column">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        <Nav.Link href="#settings">Settings</Nav.Link>
      </Nav>
    </>
  );
}

export default Dashboard;
