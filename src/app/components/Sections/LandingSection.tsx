import * as React from "react";
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ["latin"] });
export interface ILandingSectionProps {
  addToRefs?: any;
}

const LandingSection = React.forwardRef(function Landing(
  props: ILandingSectionProps,
  ref: any
) {
  return (
    <section
      className={`section-padding  h-85dvh   text-black_c-500
    flex items-center justify-center ${mulish.className} 2xl:px-[10%]
    
    `}
    >
      <div className="w-fit ">
        <h1 className="text-[64px] 2xl:text-[75px] lg:space-x-[25px] ">
          <span
            ref={props.addToRefs}
            className="text-black_c-500 text-2xl sm:text-[35px] xl:text-[45px] italic font-light text-hover
            
            "
          >
            UX Designer
          </span>{" "}
          <span
            ref={props.addToRefs}
            className="text-white  text-hover  text-3xl sm:text-[75px]
        "
          >
            Crafting
          </span>
        </h1>
        <h1
          ref={props.addToRefs}
          className="font-[800] text-hover whitespace-nowrap text-5xl sm:text-[96px] xl:text-[129px]  transition-all duration-500 ease-in-out"
        >
          User-Centric
        </h1>
        <h2
          ref={props.addToRefs}
          className={`text-end text-4xl sm:text-[64px] pt-[35px]  xl:text-[75px] font-[200] italic text-black_c-500 text-hover  `}
        >
          Experiences
        </h2>
      </div>
    </section>
  );
});

export default LandingSection;
