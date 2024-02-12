"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const animation = {
    scale: [1, 2, 2, 1, 1, 1000],
    rotate: [0, 0, 360, 360, 0],
  };
  const transition = {
    duration: 2,
    ease: "easeInOut",

    times: [0, 0.2, 0.5, 0.8, 1],
    loop: Infinity,
    repeat: Infinity,
    repeatDelay: 0.8,
  };
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  });
  return (
    <>
      {/*   <div
        className={`fixed overflow-hidden bg-black h-screen w-screen flex items-center justify-center
        transition-all
        ${isLoading ? "opacity-1 z-50 " : "opacity-0  z-[-99]"}`}
      >
        <motion.div
          animate={animation}
          transition={transition}
          exit={{ opacity: 0 }}
          className="text-white text-4xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="34"
            viewBox="0 0 28 34"
            fill="none"
            className="w-40 h-[40]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2632 5.67815L15.8704 11.4529L0 33.2087H3.19644L9.10526 25.1098H27.4541L26.1243 22.984L18.678 11.0638L18.2155 10.3213L12.2632 0.79126V5.67815ZM10.9611 22.5664H22.8126L17.3448 13.814L10.9611 22.5664Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </div>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main> */}
      <div>{children}</div>
    </>
  );
}
