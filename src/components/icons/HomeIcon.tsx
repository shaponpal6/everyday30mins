import * as React from "react";

function SvgHomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 19a1 1 0 01-1 1H4a1 1 0 01-1-1v-9H0L10.327.612a1 1 0 011.346 0L22 10h-3v9zm-9-7v6h2v-6h-2z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgHomeIcon;
