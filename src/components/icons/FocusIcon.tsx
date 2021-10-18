import * as React from "react";

function SvgFocusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.476 12C1.651 5.6 7.26.75 14 .75 20.74.75 26.348 5.6 27.524 12 26.349 18.4 20.74 23.25 14 23.25 7.26 23.25 1.653 18.4.476 12zM14 18.25a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zm0-2.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgFocusIcon;
