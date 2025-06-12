import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import portf from "../../Assets/Projects/portf.png";
import res from "../../Assets/Projects/res.png";
import netflic from "../../Assets/Projects/netflic.png";
import ha from "../../Assets/Projects/ha.png";
import sent from "../../Assets/Projects/sent.png"




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ha}
              isBlog={false}
              title="HackFlow"
              description="Built a web app using React, Vite, and Tailwind CSS that can generate 1000+ hackathon ideas using Gemini API, 
reducing manual ideation time by 90%.
 Developed user authentication system (login/logout) and a save feature, enabling users to bookmark and access up to 100 
saved ideas. "
    demoLink="https://www.youtube.com/watch?si=POU5yCbpSq6z7jB3&v=vf-MWes5VfU&feature=youtu.be" 
              ghLink="https://github.com/swayamvirmani/hackflow"
              // demoLink="https://hackflow.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Revieweb - 1 "
              description="Analyzed 50,000+ movie reviews using ML models and achieved 89%+ accuracy using TF-IDF and optimized 
preprocessing. Evaluated models using precision, recall, F1-score. Tech Stack: Python, scikit-learn, NLTK, pandas, TF-IDF.  "
              ghLink="https://github.com/swayamvirmani/sentiment-analysis"
              demoLink="https://docs.google.com/document/d/172Jx7nrCQoVClpktZ79u1mpGVRIKi0Wk/edit?rtpof=true&sd=true&tab=t.0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sent}
              isBlog={false}
              title="Revieweb - 2"
              description="Built a real-time web-based web app to detect fake reviews with Voting Classifier (LogReg + RF). Achieved 92% accuracy with features like hype score detection and confidence alerts. Processed 10,000+ reviews. Tech Stack: Python, scikit-learn, Gradio, NLTK, pandas, TF-IDF."
              ghLink="https://github.com/swayamvirmani/fake_review_detection"
              demoLink="https://drive.google.com/file/d/1qFR3lvK_k6EItCbmhAzETl0wfgHXMM44/view"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflic}
              isBlog={false}
              title="Authentication and Routing models"
              description="Built a robust netflix UI using tailwind css and an authentication system on a react+vite application having a lot of validation features allowing routing from one page to another."
              ghLink="https://github.com/swayamvirmani/netflix"
              demoLink="https://my-netflix-steel-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={res}
              isBlog={false}
              title="Resume Companion (ongoing)"
              description="A complete end to end MERN stack web application that will allow users to upload resume to know AI based reviews on formatting, missing social links, level of projects, etc. The project would also carry a peer to peer comparision page that would allow user to end more than two resumes to compare them. Another feature would include a leadrrboard dashboard which would display top quality resumes."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_zGood"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portf}
              isBlog={false}
              title="Portfolio Project"
              description="Built a responsive and interactive website using React and Bootstrap, incorporating client-side routing for smooth navigation. Integrated a file viewing system to display documents like resumes and created a dynamic project showcase section powered by the GitHub API, including real-time contribution graph visualization. Enhanced user experience through well-timed animations and a clean, intuitive UI."
              ghLink="https://github.com/swayamvirmani/portfolio"
              demoLink="https://portfolio-nine-orcin-81.vercel.app/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
