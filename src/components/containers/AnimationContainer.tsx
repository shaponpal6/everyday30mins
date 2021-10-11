import React, { FC } from "react";
import { ParticlesAnimation } from "@components/animations";

interface Props {
  onCloseHandler?: () => void,
  headerComp?: React.ReactNode,
  footerComp?: React.ReactNode,
  header?: string,
  footer?: string,
}

const AnimationContainer:FC<Props> = ({ children , ...props}) => {
  // console.log(`props`, props) w-full h-48 min-h-screen
  const { headerComp, footerComp, onCloseHandler} = props;
  
  return (
    <>
    <ParticlesAnimation/>
    <div className="absolute bg-transparent">
        {children}
    </div>
    </>
  );
};

export default AnimationContainer;
