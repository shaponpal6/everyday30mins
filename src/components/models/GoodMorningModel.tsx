import React, { FC } from "react";
import { XCircleIcon } from "@components/icons";

interface Props {
  onCloseHandler?: () => void,
  headerComp?: React.ReactNode,
  footerComp?: React.ReactNode,
  header?: string,
  footer?: string,
}

const GoodMorningModel:FC<Props> = ({ children , ...props}) => {
  // console.log(`props`, props)
  const { headerComp, footerComp, onCloseHandler} = props;
  
  return (
    <div className="fixed w-full h-screen min-h-screen flex flex-col justify-center items-center px-24 py-10 bg-black bg-opacity-75">
      {headerComp}
      <div className="relative flex flex-col justify-center items-center w-10/12 h-4/5 px-10 py-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-2xl">
        <div className="absolute right-7 top-8" onClick={onCloseHandler}><XCircleIcon fill="white"/></div>
        <h1 className="text-8xl text-white font-bold pb-24">Good Morning</h1>
        {children}
        <button onClick={onCloseHandler} className="py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          Thanks You <b>LORD</b> for Today 
        </button>
      </div>
      {footerComp}
    </div>
  );
};

export default GoodMorningModel;
