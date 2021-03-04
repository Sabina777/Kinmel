import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
const Footer = () => {
  const footerHeading = {
    color: "white",
    fontWeight: "900",
    fontSize: 18,
  };

  const normalText = {
    color: "#dcdde1",
    fontSize: 12,
  };
  return (
    <footer style={{ backgroundColor: "#343a40" }}>
      <Container>
        <Row className="justify-content-md-center py-3">
          <Col>
            <p style={footerHeading}>CONTACT</p>
            <p>
              <i
                className="fa fa-phone-alt"
                aria-hidden="true"
                style={normalText}
              ></i>{" "}
              <span style={normalText}>+9779861086060</span>
            </p>
            <p>
              <i
                className="fas fa-envelope"
                aria-hidden="true"
                style={normalText}
              ></i>{" "}
              <span style={normalText}>Kinmel@gmail.com</span>
            </p>
          </Col>
          <Col>
            <p style={footerHeading}>INFORMATION</p>
            <p style={normalText}>About us</p>
            <p style={normalText}>FAQ</p>
          </Col>
          <Col>
            <p style={footerHeading}>POLICIES</p>
            <p style={normalText}>Return and exchange policies</p>
          </Col>

          <Col>
            <p style={footerHeading}>ADDRESS</p>
            <p style={normalText}>Kathmandu Central Region - 44600 NP</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4382979858783!2d85.40481071453753!3d27.672845233615437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a90076c953b%3A0x58df4b08cc420397!2sSallaghari%20Open%20Ground!5e0!3m2!1sen!2snp!4v1610867776507!5m2!1sen!2snp"
              width="300"
              height="150 "
              allowfullscreen=""
              frameborder="0"
            ></iframe>

            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4382979858783!2d85.40481071453753!3d27.672845233615437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a90076c953b%3A0x58df4b08cc420397!2sSallaghari%20Open%20Ground!5e0!3m2!1sen!2snp!4v1610867776507!5m2!1sen!2snp"
              width="600"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe> */}
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-3">Copyright &copy; Kinmel App</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
