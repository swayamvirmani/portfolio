import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M 
                 <strong className="main-name">     SWAYAM VIRMANI</strong>
              </h1>

              <div className="type-container">
                <Type />
              </div>
            </Col>

            <Col md={5} className="d-flex justify-content-center align-items-center">
              <div className="image-container">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ 
                    maxHeight: "450px",
                    filter: "drop-shadow(0 0 20px rgba(144, 238, 144, 0.3))",
                    transition: "transform 0.3s ease"
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
