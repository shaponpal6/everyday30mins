import React, { FC } from "react";
import { XCircleIcon } from "@components/icons";

interface Props {
  onCloseHandler?: () => void,
  headerComp?: React.ReactNode,
  footerComp?: React.ReactNode,
  header?: string,
  footer?: string,
}

const PopOver:FC<Props> = ({ children , ...props}) => {
  // console.log(`props`, props)
  const { headerComp, footerComp, onCloseHandler} = props;
  
  return (
    <div className="fixed w-full h-48 min-h-screen flex flex-col px-14 py-10 bg-transparent">
      <span className="absolute right-10" onClick={onCloseHandler}><XCircleIcon fill="white"/></span>
      {headerComp}
      <div className="flex flex-col justify-center items-center h-24 min-h-full px-10 py-10 bg-green-400 rounded-2xl shadow-2xl">
        <h1 className="text-8xl text-white font-bold">Good Morning</h1>
        {children}
        <button onClick={onCloseHandler} className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
          Thanks You <b>LORD</b> for Today 
        </button>
      </div>
      {footerComp}
    </div>
  );
};

export default PopOver;
