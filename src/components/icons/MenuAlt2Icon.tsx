import * as React from "react";

function SvgMenuAlt2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="menu-alt-2-icon_svg__h-6 menu-alt-2-icon_svg__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  );
}

export default SvgMenuAlt2Icon;
