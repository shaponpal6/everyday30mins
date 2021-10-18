import * as React from "react";

function SvgActivitiesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.605 13.583A6.25 6.25 0 1111.5 17.75v-4.167H5.605zm-.355 6.25h9.375v2.084H5.25v-2.084zM.042 10.458h3.125v2.084H.042v-2.084zm1.041 5.209h8.334v2.083H1.083v-2.083zM10.458.042h2.084v3.125h-2.084V.042zM2.661 4.134l1.473-1.473 2.21 2.21L4.87 6.344 2.66 4.135zM16.656 18.13l1.473-1.473 2.21 2.21-1.473 1.473-2.21-2.21zm2.21-15.469l1.473 1.474-2.21 2.21-1.473-1.473 2.21-2.21zm4.092 7.798v2.084h-3.125v-2.084h3.125z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgActivitiesIcon;
