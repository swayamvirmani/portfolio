import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          Tools<strong className="purple"> I use</strong> 
        </h1>
        <Toolstack />

        {/* TECHNICAL OVERVIEW SECTION */}
        <h1 className="project-heading">
         Technical  <strong className="purple"> Overview</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8}>
            <Card
              className="project-card-view"
              style={{ backgroundColor: "#1e1e2f", color: "white" }}
            >
              <Card.Body>
                <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                  <li>
                    <strong>Programming:</strong> PHP, JavaScript, Java, C++, Python
                  </li>
                  <li>
                    <strong>Coursework:</strong> Operating System, Computer Networks, RDBMS, DSA
                  </li>
                  <li>
                    <strong>Web Development:</strong> JavaScript, ReactJs, NodeJs, ExpressJs
                  </li>
                  <li>
                    <strong>Other Skills:</strong> Machine Learning, NLP, OpenCV, Image Processing
                  </li>
                  <li>
                    <strong>Tools:</strong> Git, AppWrite, Firebase, Postman
                  </li>
                  <li>
                    <strong>Soft Skills:</strong> Problem-Solving, Teamwork, Adaptability
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

            
        {/* EXPERIENCE SECTION */}
        <h1 className="project-heading">
           My <strong className="purple">Experience</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8}>
            <Card
              className="project-card-view"
              style={{ backgroundColor: "#1e1e2f", color: "white" }}
            >
              <Card.Body>
                <Card.Title>
                  <strong className="purple">Android Developer Intern</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Indev Consultancy Pvt. Ltd. | Jun 2023 – Jul 2023 | Delhi, India
                </Card.Subtitle>
                <Card.Text>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>Worked on a government-based mobile application using Flutter and Dart.</li>
                    <li>Enhanced UI features — styling, responsiveness, and improved navigation.</li>
                    <li>Resolved bugs from previous builds, fixing both functional and logical issues.</li>
                    <li>Collaborated with team members to integrate features seamlessly with REST APIs.</li>
                    <li>Ensured app performance aligned with industry best practices and standards.</li>
                  </ul>
                </Card.Text>
                <p className="purple" style={{ marginTop: "10px" }}>
                  Tech used: Flutter, Dart, REST API
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
