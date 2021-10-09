import React from "react";

import { Main, Footer, Cards } from "@components";
import { HomeLayout } from "@components/layouts";
import { BoxContainer, Container } from "@components/containers";
import { SiteLogo, Navbar } from "@components/headers";

const Home: React.FC = () => {
  return (
    <HomeLayout>
    <BoxContainer header="true" headerComp={<SiteLogo />} >
      <Navbar />
      <Main />
    </BoxContainer>
    <Container>
      <Cards />
      <Footer />
    </Container>
    </HomeLayout>
  );
};

export default Home;
