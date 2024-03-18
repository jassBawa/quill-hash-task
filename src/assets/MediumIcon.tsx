import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#DDD"
      d="M18.486 12.37c0 5.103-4.084 9.24-9.121 9.24-5.037 0-9.12-4.137-9.12-9.24 0-5.103 4.083-9.24 9.12-9.24 5.037 0 9.12 4.137 9.12 9.24ZM28.49 12.369c0 4.803-2.041 8.697-4.56 8.697-2.519 0-4.56-3.894-4.56-8.697 0-4.804 2.041-8.698 4.56-8.698 2.519 0 4.56 3.894 4.56 8.698ZM32.583 12.372c0 4.304-.718 7.793-1.604 7.793-.886 0-1.604-3.49-1.604-7.793 0-4.304.718-7.793 1.604-7.793.886 0 1.604 3.489 1.604 7.793Z"
    />
  </svg>
);
export default SvgComponent;
