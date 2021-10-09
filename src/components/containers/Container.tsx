import React, { FC } from "react";

interface Props {}

const Container:FC<Props> = ({ children , ...props}) => {
  return (
    <div className="min-h-screen flex flex-col" {...props}>{children}</div>
  );
};

export default Container;
