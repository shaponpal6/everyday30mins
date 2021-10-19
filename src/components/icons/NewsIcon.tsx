import * as React from "react";

function SvgNewsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.208 20.083H3.792a2.875 2.875 0 01-2.875-2.875V1.875a.958.958 0 01.958-.958h13.417a.958.958 0 01.958.958v11.5h3.833v3.833a2.875 2.875 0 01-2.875 2.875zm-.958-4.791v1.916a.959.959 0 001.917 0v-1.916H16.25zM4.75 5.708v1.917h7.667V5.708H4.75zm0 3.834v1.916h7.667V9.542H4.75zm0 3.833v1.917h4.792v-1.917H4.75z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgNewsIcon;
