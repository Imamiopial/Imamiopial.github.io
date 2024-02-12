import * as React from "react";
import Fiverr from "@/app/assets/icons/marketplace/fiverr.svg";
import Linkedin from "@/app/assets/icons/marketplace/linkedin.svg";
import Behance from "@/app/assets/icons/marketplace/behance.svg";
export interface IGetInTouchSectionProps {
  addToRefs: any;
}

export default React.forwardRef(function GetInTouchSection(
  props: IGetInTouchSectionProps,
  ref: any
) {
  return (
    <>
      <div className="pt-[180px] flex flex-col gap-[80px]  items-start  max-w-[334px] xl:max-w-[364px] mx-auto">
        <div className="space-y-[30px] ">
          <h1 className="uppercase  text-centerpo  text-[45px]">
            GET IN TOUCH
          </h1>
          <p
            className="py-3 px-7 2xl:py-[18px] 2xl:px-9 border-[.5px] rounded-lg text-xl text-[26px] tracking-[1px]
        leading-[36px] hover:bg-white hover:text-black font-bold
        transition-all duration-500 ease-in-out text-center
        "
            ref={props.addToRefs}
          >
            amiopial017@gmail.com
          </p>
        </div>
        <div className="space-y-[30px]  ">
          <h5 className="text-xl 2xl:text-[26px] font-bold leading-[36px] tracking-[1px]">
            Free Consulting!
          </h5>

          <p className="text-gray_c-500 tracking-[.28px] text-base 2xl:text-lg">
            <span className="text-white font-bold">Feel free to reach out</span>{" "}
            and <span className="text-white font-bold">discuss</span> your
            business,Let&apos;s create exceptional user experiences together
          </p>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="group" ref={props.addToRefs}>
            <Linkedin className="svg-hover w-[42px] h-[52px] " />
            <hr
              className="w-0  mx-[10%] group-hover:w-[80%] h-[2px]
            transition-all duration-500 ease-in-out
            "
            />
          </div>

          <div className="group " ref={props.addToRefs}>
            <Fiverr className="svg-hover w-[110px] h-[43px] " />
            <hr
              className="w-0 ml-[5%] mr-[10%] group-hover:w-[85%] h-[2px]
            transition-all duration-500 ease-in-ouiput
            "
            />
          </div>
          <div className="group" ref={props.addToRefs}>
            <Behance className="svg-hover w-[52px] h-[45px] " />
            <hr
              className="w-0 mx-[5
                %] group-hover:w-[90%] h-[2px]
            transition-all duration-500 ease-in-out
            "
            />
          </div>
        </div>
      </div>
    </>
  );
});
