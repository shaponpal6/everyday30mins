import React, { FC } from "react";

interface Props {
  headerComp?: React.ReactNode,
  footerComp?: React.ReactNode,
  header?: string,
  footer?: string,
}

const BoxContainer:FC<Props> = ({ children , ...props}) => {
  // console.log(`props`, props)
  const { header, headerComp, footer, footerComp} = props;
  
  return (
    <div className="block w-full flex flex-col px-14 py-10 bg-transparent">
      {header ==='show'  && headerComp}
      <div className="block w-full flex flex-col px-10 py-10 bg-gray-800 rounded-2xl shadow-2xl border-2 border-gray-300" {...props}>
        {children}
      </div>
      {footer ==='show'  && footerComp}
    </div>
  );
};

export default BoxContainer;
