import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Hero: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://agapeconstruction.com/wp-content/uploads/2020/06/handyman.jpg')",
      }}
    >
      <Container>
        <Row className="flex flex-col md:flex-row items-center">
          <Col md={6} className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-white mb-4">
              Westchester's Best Handyman Services
            </h1>
            <p className="text-lg text-white mb-6">
              Reliable and professional home repair and maintenance services at
              your doorstep.
            </p>
            <Button variant="primary" size="lg">
              Request Estimate
            </Button>
          </Col>
          <Col md={6}>
            <div className="h-70 w-full bg-black bg-opacity-60 flex items-center justify-center">
              <img
                src={logo}
                alt="Handyman Service"
                className="rounded shadow-lg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
