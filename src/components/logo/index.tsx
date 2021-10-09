import React from "react";
import { Everyday30Mins } from "@components/icons";

export const Logo: React.FC = () => {
  return (
    <Everyday30Mins
      data-test="icon"
      className="text-white mx-auto"
      width="300"
      height="58"
    />
  );
};
