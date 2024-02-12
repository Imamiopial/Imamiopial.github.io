import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";

export interface IOtherOptionProps {
  title: string;
  imageUrl: string;
  actionText: string;
  addToRefs: any;
}

export default function OtherOption(props: IOtherOptionProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="flex flex-col gap-[38px]"
    >
      <div>
        <h1
          className="text-[27px] font-bold pb-4 border-b
      border-[#353535]"
        >
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block transition-colors duration-500 "
          >
            {props.title.split(" ").map((word, index) => (
              <motion.span key={index} className="inline-block">
                {word.split("").map((l, i) => (
                  <motion.span
                    variants={{
                      initial: { x: 0 },
                      whileHover: { x: 16 },
                    }}
                    transition={{ type: "spring" }}
                    className="inline-block"
                    key={i}
                  >
                    {l}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
            ))}
          </motion.span>
        </h1>
        {/* <hr className="bg-[#353535] h-[.5px] w-full mt-3" /> */}
      </div>
      <div className="space-y-6">
        <Image
          src={props.imageUrl}
          alt="image"
          height={182}
          width={297}
          className="w-full"
        />
        <button
          ref={props.addToRefs}
          className="flex items-center gap-4 text-base 2xl:text-xl
            font-bold leading-[20px] tracking-[.565] project-button transition-all duration-500 ease-in-out
            
            "
        >
          {props.actionText}
          <div className="flex justify-center items-center button-div rounded-full bg-white h-10 w-10 transition-all duration-500 ease-in-out">
            <Image
              src="/Icon/arrowTopRight.svg"
              loading="lazy"
              height={40}
              width={40}
              alt=""
              className="image-2 transition-all duration-500 ease-in-out"
            />
          </div>
        </button>
      </div>
    </motion.div>
  );
}
