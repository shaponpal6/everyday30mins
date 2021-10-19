import React, { useState } from "react";

import { Main, Footer, Cards } from "@components";
import { HomeLayout } from "@components/layouts";
import { BoxContainer, Container, PopOver, AnimationContainer } from "@components/containers";
import {  Navbar } from "@components/headers";
import { ParticlesAnimation } from "@components/animations";
import { ServicesList } from "@components/services";

const Home: React.FC = () => {
  const [thank, giveThank] = useState<boolean>(false);

  return (
    <HomeLayout>
    {/* <AnimationContainer> */}
    <BoxContainer >
      <Main />
    </BoxContainer>
    {/* <ParticlesAnimation/> */}
    <Container className="bg-white">
      <ServicesList />
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
