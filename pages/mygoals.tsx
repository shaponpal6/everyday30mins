import React, { useState } from "react";

import { Cards } from "@components";
import { HomeLayout } from "@components/layouts";
import { MyGoals as MyGoalsComponent, MyRegularRoutine } from "@components/mygoals";
import { BoxContainer, Container, PopOver, AnimationContainer } from "@components/containers";

const MyGoals: React.FC = () => {
  const [thank, giveThank] = useState<boolean>(false);

  return (
    <HomeLayout>
      <Container>
        {/* <MyGoalsComponent /> */}
        <MyRegularRoutine />
      </Container>
    </HomeLayout>
  );
};

export default MyGoals;
