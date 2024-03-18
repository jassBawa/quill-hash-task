import * as React from "react";
import { SVGProps } from "react";
const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#DDD"
      d="M10.216 9.065c.376.28.847.432 1.333.432s.957-.153 1.333-.432l9.223-6.863a4.144 4.144 0 0 0-1.434-1.013A4.538 4.538 0 0 0 18.9.825h-14.7a4.538 4.538 0 0 0-1.773.364A4.144 4.144 0 0 0 .992 2.202l9.224 6.863Z"
    />
    <path
      fill="#DDD"
      d="M14.216 10.536a4.49 4.49 0 0 1-2.666.861 4.49 4.49 0 0 1-2.666-.861L.073 3.979c-.045.214-.07.432-.073.65v8.561c.001 1.01.444 1.976 1.231 2.69.788.713 1.855 1.114 2.969 1.115h14.7c1.114 0 2.181-.402 2.969-1.115.787-.714 1.23-1.68 1.231-2.69V4.63a3.416 3.416 0 0 0-.073-.651l-8.811 6.557Z"
    />
  </svg>
);
export default MailIcon;