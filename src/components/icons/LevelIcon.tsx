import * as React from "react";

function SvgLevelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.783 1.826L9 0l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L9 22l-6.328-4.219A6 6 0 010 12.79V2.802a1 1 0 01.783-.976zM9 12.5l2.939 1.545-.561-3.272 2.377-2.318-3.286-.478L9 5 7.53 7.977l-3.285.478 2.377 2.318-.56 3.272L9 12.5z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgLevelIcon;
