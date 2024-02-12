import Image from "next/image";
import * as React from "react";
import Arrow from "@/app/assets/icons/arrow.svg";
export interface IOtherProjectSectionProps {}

export default function OtherProjectSection(props: IOtherProjectSectionProps) {
  return (
    <section className="mt-20">
      <h1 className="mb-10 text-[32px] 2xl:text-[43px] font-light">
        Explore other Projects
      </h1>
      <div className="space-y-8">
        <div className="flex gap-5 overflow-x-auto">
          <Image
            src={"/Images/otherProjects/mobile_pages.png"}
            alt="banner"
            height={150}
            width={250}
            className="rounded-sm"
          />
          <Image
            src={"/Images/otherProjects/car_landing.png"}
            alt="banner"
            height={150}
            width={250}
            className="rounded-sm"
          />
          <Image
            src={"/Images/otherProjects/referzip.png"}
            alt="banner"
            height={150}
            width={250}
            className="rounded-sm"
          />
        </div>
        {/*  <button
          className="flex items-center gap-2
            font-bold px-10 py-4 leading-[20px] tracking-[.565] border-[.5px] rounded-lg
            "
        >
          See Project <Arrow />
        </button> */}
        <button
          className="flex items-center gap-4 text-base 2xl:text-xl
            font-bold leading-[20px] tracking-[.565] project-button transition-all duration-500 ease-in-out
            
            "
        >
          See Project
          <div className="flex justify-center items-center button-div rounded-full bg-white h-10 w-10 transition-all duration-500 ease-in-out">
            <Image
              src="/Icon/arrowTopRight.svg"
              loading="lazy"
              height={40}
              width={40}
              alt=""
              className="image-2 transition-all duration-500 ease-in-out"
            />
            {/* <Arrow className="h-10 w-10 image-2 transition-all duration-500 ease-in-out" /> */}
          </div>
        </button>
      </div>
    </section>
  );
}
