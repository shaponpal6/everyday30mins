import React, { FC } from "react";

// import { Container, Header, Main, Footer, Cards } from "@components";
interface Props {}

const HomeLayout:FC<Props> = ({ children , ...props}) => {
  return (
    <div className="min-h-screen flex flex-col" {...props}>{children}</div>
  );
};

export default HomeLayout;
