import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

type Props = {};

export default function Newsletter({}: Props) {
  return (
    <div
      className="bg-gradient-to-r from-[#EDF2FE] to-[#D9D9D900] w-full pt-4 pb-24 md:py-16 px-8 md:px-0

  "
    >
      <div className="md:max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="subscribe__content">
          <p className="text-[#407AFF] text-lg mt-8 font-semibold hidden md:block">
            NEWSLETTER
          </p>
          <p className="subscribe__heading mt-4 text-md text-center md:text-left md:text-4xl leading-loose font-semibold text-[#14316C]">
            Security First News Letter by QuillAudits
          </p>
          <p className="text-[#2D3648] mt-8 hidden md:block">
            Subscribe for the most Exclusive Weekly security based newsletter
            and covering all the recent hacks up to date.
          </p>
        </div>
        {/* image */}
        <div className="subscribe__image  w-full">
          <div className="image__container relative ">
            <Image
              src="/images/subscribe-newsletter.png"
              alt="hero image"
              width={580}
              height={340}
              className=""
            />
          </div>
          <p className="md:hidden px-8 text-sm text-center leading-relaxed">
            DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to
            your Inbox. Explore our weekly newsletter:
            <span className="text-[#2D83EE] font-semibold pl-1">
              HashingBits
            </span>
            . Stay updated on everything we’re publishing. Stand a step ahead.
          </p>
          <div className="input__container mt-4 md:mt-0 relative rounded-md shadow w-[90%] mx-auto flex gap-2 bg-white py-2 px-6">
            <input
              type="text"
              className="border-none outline-none flex-1 w-1/2"
              placeholder="vitalik@ethereum.org"
            />
            <Button className="absolute md:relative -bottom-16 left-1/3 md:bottom-0 md:left-0">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
