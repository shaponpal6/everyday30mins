import * as React from "react";

function SvgPointsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 9h7L7 22v-9H0L9 0v9z" fill="#fff" />
    </svg>
  );
}

export default SvgPointsIcon;
