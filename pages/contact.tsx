import React from "react";

import { Header, Main, Footer, Cards } from "@components";
import { Container } from "@components/containers";

const Contact: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Cards />
      <Footer />
    </Container>
  );
};

export default Contact;
