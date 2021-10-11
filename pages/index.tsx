import React, { useState } from "react";

import { Main, Footer, Cards } from "@components";
import { HomeLayout } from "@components/layouts";
import { BoxContainer, Container, PopOver, AnimationContainer } from "@components/containers";
import { SiteLogo, Navbar } from "@components/headers";
import { ParticlesAnimation } from "@components/animations";

const Home: React.FC = () => {
  const [thank, giveThank] = useState<boolean>(false);

  return (
    <HomeLayout>
    {/* <AnimationContainer> */}
    <BoxContainer header="false" headerComp={<SiteLogo />} >
      {/* <Navbar /> */}
      <Main />
    </BoxContainer>
    {/* <ParticlesAnimation/> */}
    <Container>
      <Cards />
    </Container>
    {!thank && 
    <PopOver onCloseHandler={() => giveThank(true)}/>
    }
    {thank && <ParticlesAnimation/>}
    {/* </AnimationContainer> */}
    </HomeLayout>
  );
};

export default Home;
