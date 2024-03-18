import React from "react";

type Props = {
  heading: string;
  content: string;
};

export default function ComprehensiveListItem({ heading, content }: Props) {
  return (
    <div className="item mt-6">
      <p className="item__heading font-semibold text-base">{heading}</p>
      <p className="item__description mt-2 pl-4">{content}</p>
    </div>
  );
}
