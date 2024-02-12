"use client";
import * as React from "react";
import ProjectSection from "./ProjectSection";
import OtherOptionSection from "./OtherOptionSection";
import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "@/app/hooks/useMediaQuery";
export interface IAllProjectsProps {
  addToRefs: any;
}

export default React.forwardRef(function AllProjects(
  props: IAllProjectsProps,
  ref: any
) {
  const refElement = React.useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 760px)");
  /* const progressPer = 88; */
  const progressWidthPer = isDesktop ? 90 : 90;
  const progressHeightPer = isDesktop ? 88 : 96;
  console.log(isDesktop);
  console.log(progressWidthPer);
  console.log(progressHeightPer);
  const { scrollYProgress } = useScroll({
    target: refElement,
    offset: ["0 1", "9 10"],
  });
  const w = useTransform(scrollYProgress, (value) => {
    /* 90 */
    const progress = `${progressWidthPer + value * 100}%`;
    /* 10 */
    if (value * 100 > 100 - progressWidthPer) {
      return "100%";
    }
    return progress;
  });
  const h = useTransform(scrollYProgress, (value) => {
    const progress = `${progressHeightPer + value * 100}%`;
    /* const progress = `${96 + value * 100}%`; */
    if (value * 100 > 12) {
      return "100%";
    }
    return progress;
  });
  return (
    <div className="relative" ref={refElement}>
      <div
        className="  project-section-padding 
              md:pt-[170px] pb-[100px] 
            "
      >
        <motion.div
          style={{ width: w, height: h }}
          className="absolute inset-0 w-full h-full bg-black_c-400  z-[-1] rounded-[50px] mx-auto my-auto"
        ></motion.div>
        <div className="py-20 md:py-[10px]  rounded-[50px] px-10 ">
          <ProjectSection addToRefs={props.addToRefs} />
          <OtherOptionSection addToRefs={props.addToRefs} />
        </div>
      </div>
    </div>
  );
});
