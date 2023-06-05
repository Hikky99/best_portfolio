import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Hamza Mohammed </span>
            from <span className="purple"> Ghana.</span>
            <br /> I love using software to solve problems.
            <br />
             I am a Machine Learning and Software Engineer.
            <br />
            <br />
            I have proficiecy in multiple languages and frameworks.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tensorflow
            </li>
            <li className="about-activity">
              <ImPointRight /> Node.js
            </li>
            <li className="about-activity">
              <ImPointRight /> React.js
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Pandas
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Numpy
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Scikit-learn 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I love building products that solve real world problems."{" "}
          </p>
          <footer className="blockquote-footer">Hamza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
