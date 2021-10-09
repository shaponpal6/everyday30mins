import React from "react";

import Link from "next/link";
import { Logo } from "@components";
import { MenuAlt2Icon } from "@components/icons";

const Navbar: React.FC = () => {
  return (
    <div className="" data-testid="container">
      <div className="flex py-1">
        <div className="flex-1">
          <MenuAlt2Icon stroke='white'/>
        </div>
        <div className="flex-1 text-center text-white">
          Points ...
        </div>
        <div className="flex-1 float-right">
          <div className="flex justify-end text-white">
            <div className="pl-4">
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
            <div className="pl-4">
              <Link href="/services">
                <a>Services</a>
              </Link>
            </div>
            <div className="pl-4">
              <Link href="/signin">
                <a>Sign In</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
