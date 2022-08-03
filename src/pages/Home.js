import React from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Himanshu Dahal</h2>
        <div className="prompt">
          <p>
            React | Node | MongoDB | Full Stack Developer with MERN, currently
            in training at Dented Code Academy.
          </p>

          <Row>
            <Col className="d-flex justify-content-around fs-1">
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto@dahalh@outlook.com"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/himanshudahal/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/dahalh"
              >
                <i className="fab fa-github text-light"></i>
              </a>
            </Col>
          </Row>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <Container>
          <Row>
            <Col>
              <div className="skill-list mt-5 d-flex flex-wrap justify-content-evenly fw-bold text-center">
                <span className="text-info">
                  <i className="fab fa-react d-block"></i> REACT
                </span>
                <span className="text-primary">
                  <i className="fab fa-html5 text-primary d-block"></i> HTML5
                </span>
                <span className="text-danger">
                  <i className="fab fa-css3-alt text-danger d-block"></i> CSS3
                </span>
                <span className="text-warning">
                  <i className="fab fa-js text-warning d-block"></i> JavaScript
                </span>
                <span className="text-primary">
                  <i className="fa-brands fa-bootstrap text-primary d-block"></i>
                  Bootstrap
                </span>
                <span className="text-success">
                  <i className="fa-brands fa-node-js text-success d-block"></i>
                  Node
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
