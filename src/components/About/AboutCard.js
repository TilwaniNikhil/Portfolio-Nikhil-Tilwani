import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nikhil Tilwani </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            <br />
            I am currently employed as a Analyst at FIS Global.
            <br />
            <br />
            I have completed my Bachelor of Engineering in Computer technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do :
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Stand-up Comedy
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling & Music...
              </li>
            </ul>
            Wanna hear something funny?<a href="https://youtu.be/Vf-uOQDnibs" className="purple"> Click Me </a>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
