import React from "react";
import { Container } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#101010",
        padding: "5px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "25px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="https://github.com/swayamvirmani"
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/swayam-virmani-b79973277/"
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/swayam-virmani-b79973277/"
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram size={30} />
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Footer;
