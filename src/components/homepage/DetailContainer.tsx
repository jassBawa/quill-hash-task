import Image from "next/image";
import React from "react";

type Props = {
  heading: string;
  content: string;
  image: string;
  alt?: string;
};

export default function DetailContainer({
  heading,
  content,
  image,
  alt,
}: Props) {
  return (
    <div>
      <div className="detailContainer md:max-w-[60%] max-w-[22rem] mx-auto md:mx-0 relative mt-12">
        <h3 className="font-display font-semibold text-2xl md:text-3xl ">
          {heading}
        </h3>
        <p className="mt-4 text-sm md:text-base">{content}</p>
      </div>
      <div className="image__container relative mt-4 md:mt-8 md:h-80 h-44 w-[20rem] mx-auto md:mx-0 md:w-[40rem]">
        <Image
          src={image}
          alt={alt ? alt : "Placeholder image here"}
          fill
          className="w-full top-0 absolute "
        />
      </div>
    </div>
  );
}
