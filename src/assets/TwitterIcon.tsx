import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#DDD"
      d="m22.355 21.563-7.739-10.989-.875-1.243-5.538-7.86L7.745.82H.943L2.6 3.176 9.963 13.63l.875 1.24 5.915 8.4.459.65h6.804l-1.66-2.357Zm-4.336.852-6.144-8.726-.876-1.243L3.87 2.323h3.067l5.767 8.188.875 1.243 7.51 10.663h-3.069v-.002Z"
    />
    <path
      fill="#DDD"
      d="m11 12.448.875 1.243-1.036 1.18-7.96 9.049H.916l9.047-10.29L11 12.448ZM23.196.82l-8.579 9.754-1.038 1.18-.875-1.243 1.038-1.18 5.812-6.61L21.234.82h1.962Z"
    />
  </svg>
);
export default SvgComponent;
