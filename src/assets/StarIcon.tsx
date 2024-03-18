import * as React from "react";
import { SVGProps } from "react";
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M9.678 1.683c.48-1.474 2.564-1.474 3.043 0l1.353 4.162a1.6 1.6 0 0 0 1.521 1.105h4.376c1.55 0 2.194 1.984.94 2.895l-3.54 2.571a1.6 1.6 0 0 0-.58 1.79l1.351 4.16c.48 1.475-1.208 2.7-2.462 1.79l-3.54-2.572a1.6 1.6 0 0 0-1.88 0l-3.54 2.571c-1.254.912-2.942-.314-2.463-1.788l1.352-4.162a1.6 1.6 0 0 0-.58-1.789l-3.54-2.571c-1.255-.911-.61-2.895.94-2.895h4.375a1.6 1.6 0 0 0 1.522-1.105l1.352-4.162Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={11.2}
        x2={11.2}
        y1={-3}
        y2={25.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFCE50" />
        <stop offset={1} stopColor="#FE9D0B" />
      </linearGradient>
    </defs>
  </svg>
);
export default StarIcon;
