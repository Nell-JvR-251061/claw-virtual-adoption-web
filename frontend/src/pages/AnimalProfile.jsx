import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../styling/AnimalProfile.css";

function AnimalProfile() {
  const API = "https://claw-virtual-adoption-web-production.up.railway.app/api/dog";

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

//   function getGoogleDriveImageUrl(driveUrl) {
//     if (!driveUrl) {
//       return "";
//     }

//     const match = driveUrl.match(/\/file\/d\/([^/]+)/);

//     if (!match) return driveUrl;

//     const imageId = match[1];

//     return `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;
//   }

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav>
        <NavBar />
      </nav>

      <Container
        fluid
        id="profile-container"
        className="m-0 my-auto"
        style={{ "font-family": "var(--inter)" }}
      >
        <Row className="m-0">
          <Col className="col-3 p-0">
            <Row className="m-0 mb-3">
              <h1
                className="m-0 p-0"
                style={{ "font-weight": "700", "text-align": "center" }}
              >
                {animal.name}
              </h1>
            </Row>
            <Row className="m-0 mb-3" id="animal-profile-image-container">

                <img
                  className="p-0"
                  id="animal-profile-image"
                  src={animal.image}
                  alt={`An image of a dog named ${animal.name}`}
                  onError={(e) => {
                    console.error("Failed to load image:", e.currentTarget.src);
                  }}
                />

            </Row>
            <Row className="m-0">
              <Col className="p-0">
                <h3
                  className="profile-quick-info"
                  style={{ "text-align": "center" }}
                >
                  Status:{" "}
                  {animal.gender ? (
                    <span style={{ color: "var(--blue)" }}>Available</span>
                  ) : (
                    <span style={{ color: "red" }}>Unavailable</span>
                  )}
                </h3>
              </Col>
            </Row>
          </Col>

          <Col className="d-flex flex-column justify-content-center px-5">
            <Row className="m-0">
              <Col className="p-0">
                <h5 style={{ "font-weight": "700", color: "var(--blue)" }}>
                  {animal.name}'s Story
                </h5>
              </Col>
            </Row>
            <Row className="m-0">
              <Col className="p-0">
                <p style={{ "font-weight": "400" }}>{animal.about}</p>
              </Col>
            </Row>

            <Row className="m-0">
              <Col className="p-0">
                <h5 style={{ "font-weight": "700", color: "var(--blue)" }}>
                  Personality
                </h5>
              </Col>
            </Row>
            <Row className="m-0">
              <Col className="p-0">
                <p style={{ "font-weight": "400" }}>{animal.personality}</p>
              </Col>
            </Row>

            <Row className="m-0">
              <Col className="p-0">
                <h5 style={{ "font-weight": "700", color: "var(--blue)" }}>
                  Information about {animal.name}
                </h5>
              </Col>
            </Row>
            <Row className="m-0">
              <Col className="p-0">
                <Row className="m-0 mb-2">
                  <Col className="p-0">
                    <h5 style={{ "font-weight": "400" }}>
                      <span style={{ "font-weight": "700", color: "black:" }}>
                        Age:
                      </span>{" "}
                      {animal.age}
                    </h5>
                  </Col>
                </Row>

                <Row className="m-0 mb-2">
                  <Col className="p-0">
                    <h5 style={{ "font-weight": "400" }}>
                      <span style={{ "font-weight": "700", color: "black:" }}>
                        Gender:
                      </span>{" "}
                      {animal.gender}
                    </h5>
                  </Col>
                </Row>

                <Row className="m-0 mb-2">
                  <Col className="p-0">
                    <h5 style={{ "font-weight": "400" }}>
                      <span style={{ "font-weight": "700", color: "black:" }}>
                        Breed:
                      </span>{" "}
                      {animal.breed}
                    </h5>
                  </Col>
                </Row>
              </Col>

              <Col className="p-0">
                <Row className="m-0 mb-2">
                  <Col className="p-0">
                    <h5 style={{ "font-weight": "400" }}>
                      <span style={{ "font-weight": "700", color: "black:" }}>
                        Size:
                      </span>{" "}
                      {animal.size}
                    </h5>
                  </Col>
                </Row>
                <Row className="m-0 mb-2">
                  <Col className="p-0">
                    <h5 style={{ "font-weight": "400" }}>
                      <span style={{ "font-weight": "700", color: "black:" }}>
                        Energy:
                      </span>{" "}
                      {animal.energy}
                    </h5>
                  </Col>
                </Row>
                <Row className="m-0 mb-2">
                  <Col className="p-0">
                    <h5 style={{ "font-weight": "400" }}>
                      <span style={{ "font-weight": "700", color: "black:" }}>
                        Located:
                      </span>{" "}
                      {animal.location}
                    </h5>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="m-0 mb-2">
              <Col className="p-0">
                <h5 style={{ "font-weight": "400" }}>
                  <span style={{ "font-weight": "700", color: "black:" }}>
                    Good With:
                  </span>{" "}
                  {animal.goodWith && animal.goodWith.join(" | ")}
                </h5>
              </Col>
            </Row>

            <Row className="m-0 mb-2">
              <Col className="p-0">
                <h5 style={{ "font-weight": "400" }}>
                  <span style={{ "font-weight": "700", color: "black:" }}>
                    Difficulty With:
                  </span>{" "}
                  {animal.badWith && animal.badWith.join(" | ")}
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default AnimalProfile;
