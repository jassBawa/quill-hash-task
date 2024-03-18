import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#DDD"
      fillRule="evenodd"
      d="M30.311 5.77s-.25-2.338-1.251-3.3c-1.126-1.375-2.378-1.375-3.003-1.375C21.802.82 15.547.82 15.547.82s-6.257 0-10.511.275c-.626.137-1.877.137-3.003 1.375C1.157 3.432.78 5.77.78 5.77s-.25 2.612-.25 5.363v2.475c0 2.612.25 5.362.25 5.362s.25 2.338 1.252 3.3c1.126 1.375 2.627 1.237 3.253 1.375 2.377.275 10.26.275 10.26.275s6.256 0 10.51-.413c.626-.137 1.878-.137 3.004-1.375.876-.962 1.251-3.3 1.251-3.3s.25-2.612.25-5.362v-2.475c0-2.613-.25-5.225-.25-5.225ZM12.418 16.633V7.42l8.133 4.675-8.133 4.537Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
