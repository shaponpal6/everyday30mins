import * as React from "react";

function SvgExerciseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.83 7.79L5 8.456V12H3V7.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.616 2.616 0 012.427 1.82c.186.583.356.977.51 1.182A4.992 4.992 0 0016 10v2a6.987 6.987 0 01-5.402-2.547l-.697 3.956L12 15.17V22h-2v-5.898l-2.27-1.904-.727 4.127L.109 17.11l.348-1.97 4.924.868L6.83 7.79zM10.5 4.5a2 2 0 110-4 2 2 0 010 4z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgExerciseIcon;
