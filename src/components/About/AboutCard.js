import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
<div className="bg-gray-900 text-white p-6 md:p-10 rounded-2xl shadow-xl max-w-3xl mx-auto">
  <p className="text-justify leading-relaxed text-lg">
    Hello! I’m <span className="text-purple-400 font-semibold">Swayam Virmani</span>, a passionate tech enthusiast from <span className="text-purple-400 font-semibold">Delhi, India</span>.
    <br /><br />
    I’m currently in my 3rd year of B.Tech in Information Technology at <span className="text-purple-400 font-semibold">Manipal University Jaipur</span>, with a CGPA of <span className="text-purple-400 font-semibold">xyz</span>.
    <br /><br />
    I’m actively learning <span className="text-purple-400 font-semibold">Computer Vision</span> and <span className="text-purple-400 font-semibold">Natural Language Processing</span>, while also strengthening my problem-solving skills through <span className="text-purple-400 font-semibold">LeetCode</span> and DSA practice.
    <br /><br />
    I’ve built projects using the <span className="text-purple-400 font-semibold">MERN Stack</span> and completed a full-stack development journey.
    <br /><br />
    Previously, I interned as an <span className="text-purple-400 font-semibold">Android Developer</span> at <span className="text-purple-400 font-semibold">Indev Consultancy Pvt. Ltd.</span> and will soon be joining <span className="text-purple-400 font-semibold">XYZ</span> for my upcoming internship.
  </p>
</div>

          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
