import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="DIsease Prediction using DTC"
              description="I developed a disease prediction model using a royalty-free
               Kaggle dataset and Python's scikit-learn and pandas libraries for data 
               manipulation and modeling. Meticulous data preprocessing included removing 
               duplicates, transforming categorical variables, and splitting the dataset.
                The Decision Tree Classifier algorithm was selected for its ability to capture
                 complex relationships, resulting in a robust and accurate model. 
                 The model achieved remarkable performance with 100% accuracy in training and
                  testing, along with precise precision, recall, and f1-score measures. 
                  Styling techniques enhanced the visual appeal and professionalism of the 
                  prediction results."
              ghLink="https://github.com/Hikky99/"
              demoLink="https://github.com/Hikky99/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Robot in Residence"
              description="I successfully developed three robotic applications using the
               Naoqi Python SDK and Choregraphe. These applications were specifically designed 
               to facilitate interactive conversations between humans and machines, identify objects,
                and enable motion in static environments. Leveraging my expertise in algorithm 
                development for perception, decision-making, and control, I implemented efficient 
                solutions. Furthermore, I established robust data pipelines to manage a range of 
                sensors and actuators, including cameras, microphones, and motors. 
                My contributions demonstrated a strong command of robotics and algorithmic
                 programming within a real-world setting."
              ghLink="https://github.com/Hikky99/"
              demoLink="https://github.com/Hikky99/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bloompool"
              description="I have developed a cutting-edge solution I called Bloompool
               that revolutionizes crop cultivation. By harnessing the power of AI and 
               robotics, we enable farmers to grow crops in a water-nutrient mixture, 
               reducing their reliance on machinery and fertilizers, which contribute 
               to carbon emissions. This system employs sensor technology to collect 
               valuable data, which is then transmitted to a centralized computer. 
               With this information at their fingertips, farmers can make informed 
               decisions or rely on programmable robots to autonomously carry out actions
                based on predefined logic.  I want to pave the way for a greener and more
                 efficient future in farming. This solution was presented at the
                  Artifical Intelligence for Good Innovation factory by the 
                  International Telecommunication Union."
              ghLink="https://github.com/Hikky99/"
              demoLink="https://github.com/Hikky99/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="GPT4 Chat App"
              description="
               I created a chat app using React, Node.js, Express, OpenAI GPT-4 API, 
               React-Redux Toolkit, and Tailwind CSS. The app offers a seamless
                chatting experience with a responsive UI. Leveraging natural language
                 processing capabilities, it generates intelligent responses.
                  The project demonstrates my expertise in frontend and backend 
                  development, API integration, state management, and UI design.
                   It showcases my ability to build complex applications using modern 
                   technologies."
              ghLink="https://github.com/Hikky99/"
              demoLink="https://github.com/Hikky99/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="99Science"
              description="I present a harmonious fusion of scientific curiosity and 
              technical prowess. Embarking on an intellectual odyssey, I navigate the
               realms of software and machine learning engineering with an unyielding
                thirst for knowledge. With my esteemed science blog as a beacon of erudition, 
                I bridge the gap between complex scientific concepts and the wider audience, 
                distilling profound insights into accessible and captivating content. 
                Through this unique amalgamation of scientific passion and technological 
                expertise, I bring a distinctive perspective to the table, poised to tackle
                 intricate challenges and drive innovation in both realms."
              ghLink="https://github.com/Hikky99/"
              demoLink="https://github.com/Hikky99/" 
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
