import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import NavBar from "./components/NavBar";
import DogCard from "./components/DogCard";

import "./App.css";
import "./styling/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AnimalGallery from "./pages/AnimalGallery";

const Home = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <Container fluid className="m-0 mt-1">
        <Row>
          <Col className="px-5 col-5 d-flex flex-column justify-content-center">
            <Row className="w-100 d-flex flex-row align-items-center">
              <Col
                xs="auto"
                className="p-0 var-font"
                style={{
                  "--font": "var(--inter)",
                  "--font-size": "var(--fs-32px)",
                  "--font-weight": "700",
                  color: "var(--blue)",
                }}
              >
                Welcome To Claw
              </Col>
              <Col xs="auto">
                <div className="claw-icon-image"></div>
              </Col>
            </Row>
            <Row
              className="p-0 my-3 var-font"
              style={{
                "--font": "var(--inter)",
                "--font-size": "var(--fs-20px)",
                "--font-weight": "700",
              }}
            >
              Changing Lives One paw at a Time
            </Row>
            <Row
              className="p-0 mt-3 mb-5 var-font"
              style={{
                "--font": "var(--open-sans)",
                "--font-size": "var(--fs-16px)",
                "--font-weight": "400",
              }}
            >
              Meet a furry friend. Learn their story. Become part of their
              journey.
              <br />
              <br />
              Virtually adopt a furry friend in need and help provide the care,
              love and support they deserve while they wait for their forever
              home.
            </Row>
            <Row className="mt-5">
              <Col className="p-0 d-flex justify-content-start">
                <Button className="button-primary p-4">View More</Button>
              </Col>
              <Col className="p-0 d-flex justify-content-end">
                <Button className="button-secondary p-4">Donate Now</Button>
              </Col>
            </Row>
          </Col>
          <Col className="p-0">
            <div className="header-image"></div>
          </Col>
        </Row>
      </Container>

      <section className="post-header-section">
        <Container
          fluid
          id="about-us-container"
          className="py-5 m-0 d-flex flex-column align-items-center text-center"
        >
          <Row
            className="p-0 var-font"
            style={{
              "--font": "var(--open-sans)",
              "--font-size": "var(--fs-36px)",
              "--font-weight": "700",
              color: "#3A5B2D",
            }}
          >
            About Us
          </Row>
          <Row
            className="p-0 mt-4 var-font"
            style={{
              "--font": "var(--open-sans)",
              "--font-size": "var(--fs-24px)",
              "--font-weight": "700",
            }}
          >
            Rescue. Rehabilitate. Rehome. Repeat.
          </Row>
          <Row
            className="p-0 mt-4 var-font"
            style={{
              "--font": "var(--open-sans)",
              "--font-size": "var(--fs-16px)",
              "--font-weight": "400",
            }}
          >
            CLAW (Community Led Animal Welfare) is a non-profit organisation
            based in South Africa dedicated to improving the lives of dogs in
            need. From rescue missions and second chances to rehabilitation and
            rehoming, we are committed to giving every dog a second chance.
            <br />
            <br />
            Our Virtual Adoption programme allows you to support a specific dog
            from anywhere in the world. Your monthly contribution provides food,
            shelter, healthcare and love, helping us continue our mission and
            creating a brighter future for our furry friends.
            <br />
            <br />
            Together, we can create a world where every dog is safe, healthy and
            loved.
          </Row>
          <Row
            className="p-0 mt-4 var-font"
            style={{
              "--font": "var(--open-sans)",
              "--font-size": "var(--fs-16px)",
              "--font-weight": "700",
            }}
          >
            Thank you for being part of the change.
          </Row>
        </Container>

        <Container fluid>
          <Row
            className="my-5 var-font d-flex flex-column align-items-center text-center "
            style={{
              "--font": "var(--inter)",
              "--font-size": "var(--fs-36px)",
              "--font-weight": "700",
              color: "var(--blue)",
            }}
          >
            Animals Up For Adoptions
          </Row>
          <Row>
            <div
              id="carouselExampleControls"
              className="carousel slide mb-4"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex flex-row justify-content-around">
                    <DogCard />
                    <DogCard />
                    <DogCard />
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Row>
          <Row className="my-5 col-3 mx-auto d-flex justify-content-center">
            <Button className="button-primary p-4 w-50">View More</Button>
          </Row>
        </Container>

        <Container fluid className="pt-3">
          <Row
            className="my-5 var-font d-flex flex-column align-items-center text-center "
            style={{
              "--font": "var(--inter)",
              "--font-size": "var(--fs-36px)",
              "--font-weight": "700",
              color: "var(--blue)",
            }}
          >
            Virtually Adopt an Animal
          </Row>
          <Row className=" px-5">
            <Col>
            <div id="virtual-adoption-image">
            </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Animal Gallery" element={<AnimalGallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
