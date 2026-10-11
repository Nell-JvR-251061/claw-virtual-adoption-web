import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "./components/NavBar";
import DogCard from "./components/DogCard";
import Footer from "./components/Footer";
import { AuthProvider, useAuth } from "./components/AuthManager";

import "./App.css";
import "./styling/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AnimalGallery from "./pages/AnimalGallery";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import geoIcon from "./assets/geoIcon.png";
import emailIcon from "./assets/emailIcon.png";
import globalIcon from "./assets/globalIcon.png";

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
                <Button className="button-primary">View More</Button>
              </Col>
              <Col className="p-0 d-flex justify-content-end">
                <Button className="button-secondary">Donate Now</Button>
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
            <Button className="button-primary w-50">View More</Button>
          </Row>
        </Container>

        <Container fluid className="pt-2 pb-5">
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
              <div id="virtual-adoption-image"></div>
            </Col>
            <Col className="ms-5">
              <Row
                className="my-4 var-font d-flex flex-column align-items-start"
                style={{
                  "--font": "var(--inter)",
                  "--font-size": "var(--fs-24px)",
                  "--font-weight": "700",
                }}
              >
                You don’t have to take them home to give them one.
              </Row>
              <Row
                className="my-5 var-font d-flex flex-column align-items-start"
                style={{
                  "--font": "var(--inter)",
                  "--font-size": "var(--fs-16px)",
                  "--font-weight": "400",
                }}
              >
                Meet the dogs currently in CLAW’s care. Choose a dog whose story
                speaks to you and become part of their journey by supporting
                their care through virtual adoption.
              </Row>
              <Row className="py-3 col-6 d-flex justify-content-start">
                <Button className="button-primary w-50">Learn More</Button>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container fluid className="pt-5 pb-3 px-5">
          <Row className="d-flex justify-content-between">
            <Col className="col-3">
              <Row id="more-info-image"></Row>
              <Row
                className="mt-3 var-font d-flex flex-column align-items-start"
                style={{
                  "--font": "var(--open-sans)",
                  "--font-size": "var(--fs-16px)",
                  "--font-weight": "400",
                }}
              >
                We are dedicated to rescuing, rehabilitating and re-homing
                animals in need. Thank you for supporting our mission.
              </Row>
            </Col>

            <Col className="col-3">
              <Row
                className="var-font d-flex justify-content-center"
                style={{
                  "--font": "var(--inter)",
                  "--font-size": "var(--fs-16px)",
                  "--font-weight": "700",
                }}
              >
                Support
              </Row>
              <Row>
                <Col className="mt-3 d-flex align-items-center">
                  <a
                    href="https://clawsa.wixsite.com/claw/projects"
                    className="var-font "
                    style={{
                      "--font": "var(--inter)",
                      "--font-size": "var(--fs-16px)",
                      "--font-weight": "400",
                      color: "black",
                    }}
                  >
                    Projects
                  </a>
                </Col>
              </Row>
              <Row>
                <Col className="mt-3 d-flex align-items-center">
                  <a
                    href="https://clawsa.wixsite.com/claw/adopt"
                    className="var-font "
                    style={{
                      "--font": "var(--inter)",
                      "--font-size": "var(--fs-16px)",
                      "--font-weight": "400",
                      color: "black",
                    }}
                  >
                    Offline Adoption
                  </a>
                </Col>
              </Row>
              <Row>
                <Col className="mt-3 d-flex align-items-center">
                  <a
                    href="https://ee6feaac-1891-4a07-9689-3ecec25ab214.filesusr.com/ugd/c293f2_23c7e923de0a4da98a9fd8a050142af2.pdf"
                    className="var-font "
                    style={{
                      "--font": "var(--inter)",
                      "--font-size": "var(--fs-16px)",
                      "--font-weight": "400",
                      color: "black",
                    }}
                  >
                    Volunteer
                  </a>
                </Col>
              </Row>
              <Row>
                <Col className="mt-3 d-flex align-items-center">
                  <a
                    href="https://clawsa.wixsite.com/claw/donate"
                    className="var-font "
                    style={{
                      "--font": "var(--inter)",
                      "--font-size": "var(--fs-16px)",
                      "--font-weight": "400",
                      color: "black",
                    }}
                  >
                    Donate Now
                  </a>
                </Col>
              </Row>
            </Col>

            <Col className="col-4">
              <Row
                className="var-font d-flex justify-content-center"
                style={{
                  "--font": "var(--inter)",
                  "--font-size": "var(--fs-16px)",
                  "--font-weight": "700",
                }}
              >
                Contact Us
              </Row>
              <Row className="mt-2 d-flex ">
                <Col className="col-1 me-2 d-flex align-items-center">
                  <img
                    src={geoIcon}
                    className="icons"
                    style={{ height: "50%" }}
                  ></img>
                </Col>
                <Col className="d-flex align-items-center">
                  <div
                    className="var-font "
                    style={{
                      "--font": "var(--inter)",
                      "--font-size": "var(--fs-16px)",
                      "--font-weight": "400",
                    }}
                  >
                    Un-named Rd, Durban Deep, Roodepoort 237-Iq, Johannesburg,
                    1724
                  </div>
                </Col>
              </Row>

              <Row className="d-flex ">
                <Col className="col-1 me-2 d-flex align-items-center">
                  <img
                    src={emailIcon}
                    className="icons"
                    style={{ height: "50%" }}
                  ></img>
                </Col>
                <Col className="d-flex align-items-center">
                  <a
                    href="mailto:clawsouthafrica@gmail.com"
                    className="var-font "
                    style={{
                      "--font": "var(--inter)",
                      "--font-size": "var(--fs-16px)",
                      "--font-weight": "400",
                      color: "black",
                    }}
                  >
                    CLAWsouthafrica@gmail.com
                  </a>
                </Col>
              </Row>

              <Row className="d-flex ">
                <Col className="col-1 me-2 d-flex align-items-center">
                  <img
                    src={globalIcon}
                    className="icons"
                    style={{ height: "50%" }}
                  ></img>
                </Col>
                <Col className="d-flex align-items-center">
                  <a
                    href="https://clawsa.wixsite.com/claw"
                    className="var-font "
                    style={{
                      "--font": "var(--inter)",
                      "--font-size": "var(--fs-16px)",
                      "--font-weight": "400",
                      color: "black",
                    }}
                  >
                    clawsa.com
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Footer />
      </section>
    </>
  );
};

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Animal Gallery" element={<AnimalGallery />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
