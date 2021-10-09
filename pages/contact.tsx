import React from "react";

import { Main, Footer, Cards } from "@components";
import { Container } from "@components/containers";
import { SiteLogo } from "@components/headers";


const Contact: React.FC = () => {
  return (
    <Container>
      <SiteLogo />
      <Main />
      <Cards />
      <Footer />
    </Container>
  );
};

export default Contact;
