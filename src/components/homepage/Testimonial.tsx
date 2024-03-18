import DoubleQuoteIcon from "@/assets/DoubeQuoteIcon";
import StarIcon from "@/assets/StarIcon";
import React from "react";

type Props = {};

export default function Testimonial({}: Props) {
  return (
    <div className="w-full rounded-xl overflow-hidden border shadow-lg">
      <div
        className="testimonial__header relative py-6 pt-20 px-14 font-display text-white 
      bg-gradient-to-r from-[#2B4D93] via-[#0E205B] to-[#162867] "
      >
        <div className="absolute top-6 left-6">
          <DoubleQuoteIcon />
        </div>

        <div className="relative -right-28 md:right-0">
          <p className="text-xl md:text-3xl font-semibold ">Sally Radley</p>
          <p className="text-sm md:text-base">WebGFi - CEO</p>
        </div>
        <div
          className="h-28 w-28 md:h-36 md:w-36 
        absolute left-10 -bottom-8
        md:inset-16 md:left-80 
        bg-[#204ECF] rounded"
        ></div>
      </div>
      <div className="testimonial__bottom relative px-8 pt-16 md:pt-14 pb-20">
        <div
          className="stars flex items-center gap-1 md:gap-2 
          -translate-y-8 md:-translate-y-8
          absolute md:relative right-10 top-12 
        md:right-0 md:top-0
        "
        >
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p className="leading-relaxed text-sm">
          “It felt like the auditing team was available within a short
          timeframe, which was excellent. The auditing process looked thorough,
          and I really appreciate the fact that you took time to investigate GAS
          optimizations.”
        </p>
        <div className="absolute bottom-6 right-6">
          <DoubleQuoteIcon className="text-[#204ECF]" />
        </div>
      </div>
    </div>
  );
}
