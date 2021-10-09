import React from "react";

import { Header, Main, Footer, Cards } from "@components";
import { HomeLayout } from "@components/layouts";
import { BoxContainer, Container } from "@components/containers";

const Home: React.FC = () => {
  return (
    <HomeLayout>
    <BoxContainer header="true" headerComp={<Header />} >
      {/* <Header /> */}
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
