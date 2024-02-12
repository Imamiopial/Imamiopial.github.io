import * as React from "react";
import ReferZip from "@/app/assets/icons/logos/referzip.svg";
import Tcat from "@/app/assets/icons/logos/t-cat.svg";
import MemeBoy from "@/app/assets/icons/logos/memeboy.svg";
import Onepark from "@/app/assets/icons/logos/onepark.svg";
import Shpper from "@/app/assets/icons/logos/shpper.svg";
import Image from "next/image";
export interface IBrandSectionProps {
  addToRefs: any;
}

const BrandSection = React.forwardRef(function BrandSection(
  props: IBrandSectionProps,
  ref: any
) {
  return (
    <div
      className="sub-section-padding flex items-center justify-between
    py-10  relative top-0 z-[-10] 2xl:px-[10%]
    "
    >
      <div ref={props.addToRefs}>
        <ReferZip className="w-[35px] md:w-[65px] h-[20px] 2xl:w-[108px] 2xl:h-7 fill-gray_c-500 svg-hover p-[1px]" />
      </div>
      <div ref={props.addToRefs}>
        {/* w-[98px] md:w-[128px]*/}
        <Onepark className="w-[35px] md:w-[65px]  h-[20px] 2xl:w-[168px] 2xl:h-7 fill-gray_c-500 svg-hover p-[1px]" />
      </div>
      <div ref={props.addToRefs}>
        <Shpper className="w-[35px] md:w-[65px] h-[20px] 2xl:w-[88px] 2xl:h-7 fill-gray_c-500 svg-hover p-[1px]" />
      </div>
      <div ref={props.addToRefs}>
        <MemeBoy className=" w-[35px] md:w-[96px] h-[20px] 2xl:w-[130px] 2xl:h-7 fill-gray_c-500 svg-hover p-[1px]" />
      </div>

      <div ref={props.addToRefs}>
        {/* w-[60px] md:w-[90px] */}
        <Tcat className="w-[35px] md:w-[65px] h-[20px] 2xl:w-[122px] 2xl:h-7 fill-gray_c-500 svg-hover p-[1px]" />
      </div>
    </div>
  );
});

export default BrandSection;
