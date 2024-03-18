import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="hero__container mt-20 max-2xl w-full lg:max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Image */}
        <div className="hero__image__container relative flex-1">
          <div className="relative h-full w-full">
            <Image
              src="/images/hero-image.png"
              alt="Carpe Diem Image"
              width={400}
              height={400}
              // fill
              className="pointer-events-none"
            />
          </div>
          <Image
            src="/images/hero-main-aside.png"
            alt="Carpe Diem aside image"
            width={100}
            height={100}
            className="bg-white absolute -bottom-4 right-10 md:-right-10 md:top-10 rounded p-2 pointer-events-none"
          />
        </div>

        {/* Details */}
        <div className="hero__details mt-8 flex-1 px-8 md:px-0 text-white">
          <h3 className="font-display font-medium text-2xl lg:text-4xl ">
            Securing Trust: Boosting Security and Strengthening Trust at Carpe
            Diem Pension
          </h3>
          <p className="font-body text-sm font-normal mt-4">
            QuillAudits enhances Carpe Diem Pension by addressing 33
            vulnerabilities on the Pulse blockchain, boosting security and user
            trust in digital pensions.
          </p>
        </div>
      </div>
      <div className="hero__navigation mt-12 relative bottom-2 left-[5%] md:left-[20%] text-xs text-white/40 ">
        <span>QuillAudits</span>
        <span> -&gt; </span>
        <span>Resources</span>
        <span> -&gt; </span>
        <span className="text-white">Case Studies</span>
      </div>
    </>
  );
}
