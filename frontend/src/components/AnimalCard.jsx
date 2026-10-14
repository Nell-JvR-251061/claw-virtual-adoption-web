import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "../styling/AnimalCard.css";

function AnimalCard({ _animal }) {
  const navigate = useNavigate();

  let imageId = getGoogleDriveImageUrl(_animal.image);

  function getGoogleDriveImageUrl(_driveUrl) {
    const match = _driveUrl.match(/\/file\/d\/([^/]+)/);
    return match ? match[1] : null;
  }

  return (
    <Container className="card mb-3 p-0" style={{ width: "18rem" }}>
      <Row className="card-body m-0 p-0">
        <Col className="p-3">
          <Row className="p-0 m-0">
            <img
              src={`https://drive.google.com/thumbnail?id=${imageId}&sz=w1000"`}
              alt={`A cute animal with the name: ${_animal.name}`}
              className="card-img-top p-0"
            ></img>
          </Row>
          <Row className="my-2">
            <h5 className="card-title m-0">Name: {_animal.name}</h5>
          </Row>
          <Row className="mb-2">
            <p className="card-text">Age: {_animal.age}</p>
          </Row>
          <Row className="mb-2">
            <p className="card-text">Breed: {_animal.breed}</p>
          </Row>
          <Row>
            <a
              onClick={() => {
                navigate("/AnimalProfile", {
                  state: { animalId: _animal._id },
                });
              }}
              className="link-to-dog text-end"
            >
              View Profile
            </a>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AnimalCard;
