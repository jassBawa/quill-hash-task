import * as React from "react";
import { SVGProps } from "react";
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={12}
    fill="none"
    {...props}
  >
    <rect width={20} height={1.693} fill="#fff" rx={0.846} />
    <rect width={20} height={1.693} y={5.153} fill="#fff" rx={0.846} />
    <rect width={20} height={1.693} y={10.308} fill="#fff" rx={0.846} />
  </svg>
);
export default MenuIcon;
