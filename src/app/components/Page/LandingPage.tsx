"use client";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import StickyCursor from "@/app/components/cursor/StickyCursor";
import PrimaryButton from "@/app/components/button/PrimaryButton";
import React from "react";
import PrimaryNavbar from "../navbar/PrimaryNavbar";
import Footer from "../footer/Footer";
import LandingSection from "../Sections/LandingSection";
import BrandSection from "../Sections/BrandSection";
import ProjectSection from "../Sections/ProjectSection";
import OtherProjectSection from "../Sections/OtherProjectSection";
import MotoTextSection from "../Sections/MotoTextSection";
import CoutesCardSection from "../Sections/CoutesCardSection";
import GetInTouchSection from "../Sections/GetInTouchSection";
import { Mulish } from "next/font/google";
import OtherOptionSection from "../Sections/OtherOptionSection";
import AllProjectsSection from "../Sections/AllProjectsSection";
import SlickSlider from "../slider/SlickSlider";

import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "@/app/hooks/useMediaQuery";
const mulish = Mulish({ subsets: ["latin"] });
export default function LandingPage() {
  // using the hook
  const isSm = useMediaQuery("(min-width: 361px)");
  const isMd = useMediaQuery("(min-width: 769px)");
  const isLg = useMediaQuery("(min-width: 1025px)");
  const isXl = useMediaQuery("(min-width: 1441px)");
  const is2Xl = useMediaQuery("(min-width: 1561px)");

  /* paralax scroll */
  console.log("isSm");
  console.log(!isSm);
  console.log("isMd");
  console.log(!isMd);
  console.log("islg");
  console.log(!isLg);
  console.log("isXl");
  console.log(!isXl);
  console.log("is2Xl");
  console.log(!is2Xl);
  const brandProjectRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: brandProjectRef,
    offset: ["0 0", ".5 0"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 0.5], ["0%", "10%"]);
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", !isMd ? "280%" : !isLg ? "220%" : !isXl ? "200%" : "150%"]
    /* ["0%", "280%"] */
  );
  /*end of paralax scroll */
  /* action cursor refs */
  const actionElements = useRef<(HTMLElement | null)[]>([]);
  actionElements.current = [];
  /*end of action cursor refs */
  useEffect(() => {
    const lenis = new Lenis();

    /* lenis.on("scroll", (e: any) => {
      console.log(e);
    }); */

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  useEffect(() => {});
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !actionElements.current.includes(el)) {
      actionElements.current.push(el);
    }
    /* console.log(actionElements); */
  };
  return (
    <main
      ref={brandProjectRef}
      className={`text-white    mx-auto ${mulish.className}`}
    >
      {/* min-h-[300vh] */}
      <StickyCursor actionElements={actionElements} />
      {/* !Need to find out the overflow issue */}
      <div className="mix-blend-difference ">
        <PrimaryNavbar addToRefs={addToRefs} />
        <motion.div style={{ y: textY }}>
          <LandingSection addToRefs={addToRefs} />

          <BrandSection addToRefs={addToRefs} />
        </motion.div>

        <motion.div style={{ y: backgroundY }}>
          <AllProjectsSection addToRefs={addToRefs} />

          {/* <OtherProjectSection /> */}
          <div className="2xl:px-[10%]">
            <div className=" sub-section-padding bg-black 2xl:px-[10%]">
              <MotoTextSection
                addToRefs={addToRefs}
                text="Designing Experiences, Shaping Perceptions & Elevating Businesses"
              />
            </div>
            <SlickSlider />
            {/* <CoutesCardSection addToRefs={addToRefs} /> */}
            <div className="sub-section-padding bg-black">
              <GetInTouchSection addToRefs={addToRefs} />
            </div>
            {/* <PrimaryButton ref={stickyElement} /> */}
            <Footer addToRefs={addToRefs} />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
