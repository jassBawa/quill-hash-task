import ChevronDown from "@/assets/ChevronDown";
import QuillIcon from "@/assets/QuillIcon";
import React from "react";
import Button from "../ui/Button";
import MenuIcon from "@/assets/MenuIcon";

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className="max-w-[80%] pt-8 md:mt-0 relative z-10 mx-auto pb-6 flex items-center justify-between text-white
    md:border-b-2 border-slate-600 font-display
    "
    >
      <div className="header__logo flex items-center gap-2">
        <QuillIcon />
        <span className="hidden md:inline-block">QuillAudits</span>
      </div>
      <ul className="header__links hidden text-md lg:flex items-center gap-8">
        <li className="flex items-center gap-1">
          Services <ChevronDown />
        </li>
        <li>Pricing</li>
        <li>Our Audits</li>
        <li className="flex items-center gap-1">
          Tools
          <ChevronDown />
        </li>
        <li className="flex items-center gap-1">
          Resources
          <ChevronDown />
        </li>
        <li>Refer-Earn-Secure</li>
      </ul>

      <div className="header__cta">
        <Button>Request an Audit</Button>
      </div>

      <div className="header__menu">
        <MenuIcon className="lg:hidden" />
      </div>
    </header>
  );
}
