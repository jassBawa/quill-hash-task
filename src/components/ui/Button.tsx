import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={`bg-gradient-to-r from-[#7184FD] via-[#3F7AF0] to-[#4F37EE] text-white font-medium py-2 px-3 md:px-4 rounded
      font-display hover:scale-105 transition ease-in
      ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
