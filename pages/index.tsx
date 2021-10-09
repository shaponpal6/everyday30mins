import React, { useState } from "react";

import { Main, Footer, Cards } from "@components";
import { HomeLayout } from "@components/layouts";
import { BoxContainer, Container, PopOver } from "@components/containers";
import { SiteLogo, Navbar } from "@components/headers";

const Home: React.FC = () => {
  const [thank, giveThank] = useState<boolean>(false);

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
    {!thank && 
    <PopOver onCloseHandler={() => giveThank(true)}/>
    }
    </HomeLayout>
  );
};

export default Home;
