import React from "react";

import { Logo } from "@components";

const SiteLogo: React.FC = () => {
  return (
    <div className="text-center" data-testid="container">
      <Logo />
    </div>
  );
};
export default SiteLogo;
