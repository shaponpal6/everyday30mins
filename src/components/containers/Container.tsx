import React, { FC } from "react";

interface Props {}

const Container:FC<Props> = ({ children , ...props}) => {
  return (
    <div className="block min-h-screen w-full min-h-screen flex flex-col" {...props}>{children}</div>
  );
};

export default Container;
