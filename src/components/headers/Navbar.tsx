import React from "react";

import Link from "next/link";
import { Logo } from "@components";
import { MenuAlt2Icon } from "@components/icons";
import { SiteLogo } from "@components/headers";

interface Props {
  className?: string
}
const Navbar: React.FC<Props> = ({...props}) => {
  return (
    <div className={props.className} data-testid="container">
      <div className="flex py-2 px-10">
        <div className="flex-1 flex items-center">
          <MenuAlt2Icon stroke='white'/>
        </div>
        <div className="flex-1 text-center text-white">
          <Link href="/">
            <a><SiteLogo/></a>
          </Link>
        </div>
        <div className="flex-1 float-right flex justify-end text-white items-center justify-items-end">
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
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
