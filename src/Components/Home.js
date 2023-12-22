import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import homeImg from "../Assets/hero-img.png";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

function Home() {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
  };

 

  const btnStyle = {
    backgroundColor: "#5c4389",
    border: 0,
  };

  return (
    <div
      style={{ backgroundColor: "#2a283e", minHeight: "100vh", height: "auto" }}
    >
      <Container style={wrapper}>

        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Col md={6}>
            <img
              src={homeImg}
              className="img-fluid"
              alt="main img"
              style={{ justifyContent: "center", padding: "30px" }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#f0c19e" }}>Code Websites From Any Where any Time</h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
              With this online code editor, you can edit HTML, CSS and
              JavaScript code, and live preview of site instantly.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Web Editor
            </Button>

         
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
