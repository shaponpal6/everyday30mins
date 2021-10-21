import React, { FC } from "react";

interface Props {
  customClass: string
}

const Container:FC<Props> = ({ children , ...props}) => {
  return (
    <div className={"block min-h-screen w-full min-h-screen flex flex-col bg-white"} {...props}>{children}</div>
  );
};

export default Container;
