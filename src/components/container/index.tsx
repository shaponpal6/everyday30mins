import { FC } from "react";
interface Props {}
export const Container:FC<Props> = ({ children , ...props}) => {
  return <div className="min-h-screen flex flex-col" {...props}>{children}</div>;
};
