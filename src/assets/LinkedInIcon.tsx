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
      d="M21.51.82a2.567 2.567 0 0 1 2.566 2.567v17.966a2.567 2.567 0 0 1-2.567 2.567H3.543a2.567 2.567 0 0 1-2.567-2.567V3.387A2.567 2.567 0 0 1 3.543.82h17.966Zm-.642 19.892V13.91a4.184 4.184 0 0 0-4.184-4.184c-1.09 0-2.361.668-2.977 1.669V9.97h-3.58v10.742h3.58v-6.327c0-.988.795-1.797 1.784-1.797a1.796 1.796 0 0 1 1.796 1.797v6.327h3.58ZM5.955 7.955A2.156 2.156 0 0 0 8.111 5.8 2.163 2.163 0 0 0 5.955 3.63 2.169 2.169 0 0 0 3.787 5.8c0 1.193.975 2.155 2.168 2.155ZM7.74 20.712V9.97H4.184v10.742H7.74Z"
    />
  </svg>
);
export default SvgComponent;
