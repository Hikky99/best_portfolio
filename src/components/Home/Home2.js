import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              I am interested in <span className="purple"> Learning </span> About your project.
            </h1>
            <p className="home-about-body">
              I love building sotware to solve real world problems.
              Join Me!
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple">  Javascript and Python. </b>
              </i>
              <br />
              <br />
              My projects revolve around &nbsp;
              <i>
                <b className="purple">Machine Learning </b> and
                {" "}
                <b className="purple">
                  Software Engineering.
                </b>
              </i>
              <br />
              <br />
              I have roficiency in
               <b className="purple">Tensorflow</b> and
              <i>
                <b className="purple">
                  {" "}
                  other ML frameworks
                </b>
              </i>
              &nbsp; I am also proficient in
              <i>
                <b className="purple"> React.js and Node.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Reach out to me</h1>
            <p>
              Let's <span className="purple">connect </span>on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Hikky99/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/hamza_99science"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamza-mohammed-ab821215b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/hamza_99science"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
