import React, { FC } from "react";
import { Navbar } from "@components/headers";
import { Footer } from "@components";

// import { Container, Header, Main, Footer, Cards } from "@components";
interface Props {}

const HomeLayout:FC<Props> = ({ children , ...props}) => {
  return (
    <div className="block min-h-screen w-full min-h-screen flex flex-col e30-bg" {...props}>
      <Navbar className=""/>
      {children}
      <Footer/>
      </div>
  );
};

export default HomeLayout;
