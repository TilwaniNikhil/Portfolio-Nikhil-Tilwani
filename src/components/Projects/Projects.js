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
          My Recent <strong className="purple">Work </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="The Dilemma"
              description="It is a social media application , created using React JS. It has all the features like login , signup, adding friend , changing your profile, etc. You can create your own profile , if you want or you can login as a guest to go through my web-app  "
              ghLink="https://github.com/TilwaniNikhil/The-Dilemma-Social-Media-Application"
              demoLink="https://the-dilemma.netlify.app/auth/login"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Track Your habits"
              description="An application deployed using Netlify which can help user to track their daily habits, where it is possible to sign-up and sign-in to create a personal space !
              In this project I have used first time libraries like react-circular-progressbar and dayjs ! Go check out it Now!"
              ghLink="https://github.com/TilwaniNikhil/Habit-Tracker"
              demoLink="https://trackyourhabits.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="The E-commerce Project"
              description="It is a e-commerce website, created using React JS. It has all the features like login , signup, adding friend , changing your profile, etc. You can create your own profile , if you want or you can login as a guest to go through my web-app "
              ghLink="https://github.com/TilwaniNikhil/ecommerce-project"
              demoLink="https://thenewattireshop.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Online Recipes"
              description="It is a Recipes website, created using Angular JS. I have also used Typscript in this project. You can check all the recipes in this website, also you can track your grocieries by adding name and quantity in the shopping list."
              ghLink="https://github.com/TilwaniNikhil/RecipieBook-master"
              demoLink="https://youronlinerecipes.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Bookshelf"
              description="Bookshelf aims to provide a simple library for common tasks when querying databases in JavaScript, and forming relations between these objects, taking a lot of ideas from the Data Mapper Pattern."
              ghLink="https://github.com/TilwaniNikhil/Bookshelf-in-react"
              demoLink="https://your-kitab.netlify.app/list"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Fun With Triangles"
              description="Do you think you know triangles well? Then lets test it! Go to the website I created using HTML, CSS, JS and play with triangles as you like. You can also check the hypotenuse and area of a triangle."
              ghLink="https://github.com/TilwaniNikhil/Playing-With-Triangles"
              demoLink="https://trianglesknowledge-checker.netlify.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
