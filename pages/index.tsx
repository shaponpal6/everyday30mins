import React, { useState } from "react";

import { Main, Footer, Cards } from "@components";
import { HomeLayout } from "@components/layouts";
import { BoxContainer, Container, AnimationContainer } from "@components/containers";
import { GoodMorningModel } from "@components/models";
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
      {thank && <ParticlesAnimation/>}
    </BoxContainer>
    {/* <ParticlesAnimation/> */}
    <Container customClass="bg-white">
      <ServicesList />
      
    </Container>
    {!thank && 
    <GoodMorningModel onCloseHandler={() => giveThank(true)}/>
    }
    
    {/* </AnimationContainer> */}
    </HomeLayout>
  );
};

export default Home;
