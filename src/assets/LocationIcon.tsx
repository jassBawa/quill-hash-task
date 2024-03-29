import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#DDD"
      d="M15.264 4.92a7.977 7.977 0 0 0-2.59-2.978A7.897 7.897 0 0 0 8.986.58a8.95 8.95 0 0 0-1.801 0 7.9 7.9 0 0 0-3.69 1.36A7.98 7.98 0 0 0 .907 4.92a8.7 8.7 0 0 0 1.176 9.51l5.39 6.604a.793.793 0 0 0 .952.215c.106-.05.2-.123.274-.215l5.39-6.604a8.698 8.698 0 0 0 1.175-9.51Zm-7.179 6.81a3.156 3.156 0 0 1-1.763-.54 3.194 3.194 0 0 1-1.17-1.435 3.221 3.221 0 0 1 .689-3.486 3.152 3.152 0 0 1 3.46-.693 3.18 3.18 0 0 1 1.423 1.178 3.217 3.217 0 0 1-.396 4.037c-.595.6-1.401.937-2.243.938Z"
    />
  </svg>
);
export default SvgComponent;
