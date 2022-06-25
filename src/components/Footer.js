import React from "react";
import "../styles/Footer.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Row>
          <Col className="d-flex justify-content-around fs-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:@dahalh@outlook.com"
            >
              <i className="fas fa-envelope text-light"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/himanshudahal/"
            >
              <i className="fab fa-linkedin text-light"></i>
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
      <p> &copy; 2022 himanshudahal.dev </p>
    </div>
  );
};

export default Footer;
