import * as React from "react";
import {
  AnimationPlaybackControls,
  animate,
  motion,
  useScroll,
} from "framer-motion";
export interface IMotoTextSectionProps {
  addToRefs: any;
  text: string;
}

export default React.forwardRef(function MotoTextSection(
  props: IMotoTextSectionProps,
  ref: any
) {
  const animControls = React.useRef<AnimationPlaybackControls>();
  useScroll().scrollYProgress.on("change", (yProgress) => {
    // Ensure the animation controls exist
    if (!animControls.current) return;

    // Calculate the new time for the animation based on scroll progress
    animControls.current.time = yProgress * animControls.current.duration;
  });
  React.useEffect(() => {
    animControls.current = animate([]);
    // Animation timeline
    animControls.current.pause();
  }, []);
  return (
    <div className="h-screen flex items-center justify-center  mx-auto ">
      {" "}
      {/* max-w-[912px] */}
      {/* <div
        ref={props.addToRefs}
        className=" block text-center text-3xl md:text-[40px] 2xl:text-[54px] uppercase text-black_c-500"
      >
        <h1>
          Designing Experiences, Shaping Perceptions & Elevating Businesses
        </h1>
      </div> */}
      <motion.div
        initial="initial"
        whileInView="whileHover"
        className="flex flex-col gap-[38px]"
        viewport={{ once: true }}
      >
        <motion.span
          viewport={{ once: true }}
          variants={{
            initial: { x: 0, opacity: "20%" },
            whileHover: { x: -16, opacity: "100%" },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,

            delayChildren: 0.25,
          }}
          className="relative z-10 block text-center text-3xl md:text-[40px] 2xl:text-[54px] uppercase text-white opacity-20 transition-colors duration-500 
          leading-normal
          "
        >
          {props.text.split(" ").map((word, index) => (
            <motion.span key={index} className="inline-block">
              {word.split("").map((l, i) => (
                <motion.span
                  viewport={{ once: true }}
                  variants={{
                    initial: { x: 0, opacity: "20%" },
                    whileHover: { x: 16, opacity: "100%" },
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
      </motion.div>
    </div>
  );
});
