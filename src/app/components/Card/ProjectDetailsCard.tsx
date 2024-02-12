import Image from "next/image";
import * as React from "react";
import Arrow from "@/app/assets/icons/arrow_top_right.svg";
import { motion } from "framer-motion";
export interface IProjectDetailsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  platform: string;
  tools: string;
  addToRefs: any;
}

export default React.forwardRef(function ProjectDetailsCard(
  props: IProjectDetailsCardProps,
  ref: any
) {
  return (
    <motion.div initial="initial" whileHover="whileHover">
      <h1
        className="group text-[42px] 2xl:text-[47px] font-bold pb-4 border-b
      border-[#353535] w-[60%] 
      "
      >
        {props.title}
      </h1>
      <div className="flex md:flex-row flex-col justify-between mt-7">
        <div
          className="flex md:flex-row flex-col gap-[22px] 
        
        "
        >
          {/* max-w-[352px] md:max-w-[560px] lg:max-w-[800px] */}
          <Image
            src={props.imageUrl}
            alt="project"
            height={190}
            width={352}
            className="rounded-sm w-full"
          />
          <div className="flex flex-col  gap-[30px] ">
            <p
              className="  leading-normal tracking-[1px] text-3xl
            max-w-[80%] font-[300] 
            "
            >
              {props.description}
            </p>
            <div
              className="  
            "
            >
              <button
                ref={props.addToRefs}
                className="flex items-center gap-4
            font-[800] leading-[28px] tracking-[.8] project-button transition-all duration-500 ease-in-out
            text-2xl
            "
              >
                See Project
                <div className="flex justify-center items-center button-div rounded-full bg-white h-[3.5rem] w-[3.5rem] transition-all duration-500 ease-in-out">
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
          </div>
        </div>
        <div className="flex  flex-row md:flex-col gap-3 sm:gap-12 md:text-end">
          <motion.div
            variants={{
              initial: {
                x: "25%",
                opacity: 0,
              },
              whileHover: {
                x: "0%",
                opacity: 1,
              },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 "
          >
            <h6 className="text-[#737373] text-xs sm:text-sm 2xl:text-lg font-medium">
              Date
            </h6>
            <p
              className="font-light text-sm sm:text-base 2xl:text-xl
            whitespace-nowrap
            "
            >
              {props.date}
            </p>
          </motion.div>
          <motion.div
            variants={{
              initial: {
                x: "25%",
                opacity: 0,
              },
              whileHover: {
                x: "0%",
                opacity: 1,
              },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 "
          >
            <h6 className="text-[#737373] text-xs sm:text-sm 2xl:text-lg font-medium">
              platform
            </h6>
            <p className="font-light text-sm sm:text-base 2xl:text-xl">
              {props.platform}
            </p>
          </motion.div>
          <motion.div
            variants={{
              initial: {
                x: "25%",
                opacity: 0,
              },
              whileHover: {
                x: "0%",
                opacity: 1,
              },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 "
          >
            <h6 className="text-[#737373] text-xs sm:text-sm 2xl:text-lg font-medium">
              Tools
            </h6>
            <p className="font-light text-sm sm:text-base 2xl:text-xl">
              {props.tools}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});
