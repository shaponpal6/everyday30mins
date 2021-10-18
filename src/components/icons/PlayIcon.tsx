import * as React from "react";

function SvgPlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M39 77.333C17.828 77.333.667 60.172.667 39 .667 17.828 17.828.667 39 .667 60.172.667 77.333 17.828 77.333 39c0 21.172-17.161 38.333-38.333 38.333zm0-7.666a30.667 30.667 0 100-61.334 30.667 30.667 0 000 61.334zm-5.282-44.41L52.42 37.724a1.534 1.534 0 010 2.553L33.715 52.742a1.534 1.534 0 01-2.38-1.272V26.53a1.533 1.533 0 012.384-1.273z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgPlayIcon;
