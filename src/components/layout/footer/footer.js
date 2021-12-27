import React from "react";
import { Container } from "react-bootstrap";
import { FooterComponent } from "./footerStyle";
const Footer = () => {
  return (
    <FooterComponent className="bg-dark">
      <Container>
        <h1 className="text-light">Footer</h1>
      </Container>
    </FooterComponent>
  );
};

export default Footer;
