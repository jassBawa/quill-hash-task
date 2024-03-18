import * as React from "react";
import { SVGProps } from "react";
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.268}
      d="m1.257 2.28-.095.095.094.095 8.033 8.093.095.096.095-.096L17.51 2.47l.094-.095-.095-.094-1.285-1.278-.095-.095-.094.095-6.652 6.703L2.73 1.003 2.637.908l-.095.095L1.257 2.28Z"
    />
  </svg>
);
export default ChevronDown;
