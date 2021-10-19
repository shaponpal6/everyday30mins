import React, { FC } from "react";
import { Navbar } from "@components/headers";

interface Props {
  // headerComp?: React.ReactNode,
  // footerComp?: React.ReactNode,
  // header?: string,
  // footer?: string,
}

const BoxContainer:FC<Props> = ({ children , ...props}) => {
  // console.log(`props`, props)
  // const { header, headerComp, footer, footerComp} = props;
  // style={{background: "https://picsum.photos/800/300/?random"}}
  
  return (
    <div className="block min-h-screen w-full flex flex-col e30-bg" >
      {/* <div className="block w-full flex flex-col e30-bg"> */}
        <Navbar/>
        <div className="block w-full flex flex-col px-14 py-10 bg-transparent ">
          {children}
        </div>
      {/* </div> */}
    </div>
  );
};

export default BoxContainer;
