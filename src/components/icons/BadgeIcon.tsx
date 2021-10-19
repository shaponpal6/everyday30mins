import * as React from "react";

function SvgBadgeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 5a8 8 0 110 16A8 8 0 018 5zm0 3.5l-1.323 2.68-2.957.43 2.14 2.085-.505 2.946L8 15.25l2.645 1.39-.505-2.945 2.14-2.086-2.957-.43L8 8.5zM9-.001L14 0v3l-1.363 1.138A9.935 9.935 0 009 3.049v-3.05zm-2 0v3.05a9.935 9.935 0 00-3.636 1.088L2 3V0l5-.001z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgBadgeIcon;
