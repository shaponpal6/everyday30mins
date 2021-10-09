import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
  return (
    <div className="text-center bg-gray-800 pt-4 pb-4" data-testid="container">
      <Logo />
    </div>
  );
};
