import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../styling/AnimalProfile.css";

function AnimalProfile() {
  const API = "http://localhost:5000/api/dog";

  const location = useLocation();
  const animalId = location.state?.animalId;

  const [animal, setAnimal] = useState({});

  useEffect(() => {
    const getAnimal = async () => {
      try {
        console.log(animalId);

        const response = await fetch(`${API}/get/${animalId}`);
        const data = await response.json();

        console.log(data);

        setAnimal(data);
      } catch (error) {
        console.error("The backend has ran away...", error);
      }
    };

    getAnimal();
  }, []);

  function getGoogleDriveImageUrl(driveUrl) {
    if (!driveUrl) {
      return "";
    }

    const match = driveUrl.match(/\/file\/d\/([^/]+)/);

    if (!match) return driveUrl;

    const imageId = match[1];

    return `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;
  }

  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <Container
        fluid
        className="m-0 px-5"
        style={{ "font-family": "var(--inter)" }}
      >
        <Row className="m-0">
          <Col className="p-0">
            <Row className="m-0 mb-3">
              <h1 className="m-0 p-0">{animal.name}</h1>
            </Row>

            <Row className="m-0 mb-3" id="animal-profile-image-container">
              {animal.image && (
                <img
                  className="p-0"
                  id="animal-profile-image"
                  src={getGoogleDriveImageUrl(animal.image)}
                  alt={`An image of a dog named ${animal.name}`}
                  onError={(e) => {
                    console.error("Failed to load image:", e.currentTarget.src);
                  }}
                />
              )}
            </Row>

            <Row className="m-0">
              <Col className="p-0">
                <h3>{animal.breed}</h3>
              </Col>
              <Col className="p-0">
                <h3>{animal.gender}</h3>
              </Col>
            </Row>

            <Row className="m-0">
              <Col className="p-0">
                <h3>{animal.age} Years Old</h3>
              </Col>
            </Row>

            <Row className="m-0">
              <Col className="p-0">
                <h3>
                  &nbsp;Status:{" "}
                  {animal.gender ? (
                    <span style={{ color: "var(--blue)" }}>Available</span>
                  ) : (
                    <span style={{ color: "red" }}>Unavailable</span>
                  )}
                </h3>
              </Col>
            </Row>
          </Col>

          <Col className="p-0"></Col>
        </Row>
      </Container>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AnimalProfile;
