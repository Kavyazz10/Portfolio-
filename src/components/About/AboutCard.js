import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kasthuri </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            Currently pursuing my B.Tech in Artificial Intelligence and Data Science. 
            <br />
            I’ve worked on projects that blend AI, web development, and cutting-edge tech like LLMs and blockchain — always aiming to create something meaningful and future-focused and deeply passionate about using technology to build smart, human-centric solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kasthuri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
