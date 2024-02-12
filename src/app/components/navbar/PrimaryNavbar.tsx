"use client";

import * as React from "react";

import Logo from "@/app/assets/icons/logo.svg";
import HamburgerIcon from "@/app/assets/icons/hamburger.svg";
import Cross from "@/app/assets/icons/cross.svg";
import { useState } from "react";
import Link from "next/link";
export interface IPrimaryNavbarProps {
  addToRefs: any;
}
const PrimaryNavbar = React.forwardRef(function Button(
  props: IPrimaryNavbarProps,
  ref: any
) {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav
      className="px-[20px] md:px-[60px] sticky pt-8 font-SF_Pro_Display
     top-0 z-50 2xl:px-[10%]
    "
    >
      <div className="flex items-center justify-between ">
        <div ref={props.addToRefs}>
          <div className="flex items-center gap-4 text-sm font-[250] tracking-[1.12px]">
            <div className="">
              <Logo className="w-[30px] 2xl:h-[36px] " />
            </div>
            <div className="text-xs sm:text-[15px]">
              <h4>
                <span className="text-white font-medium pb-1">Amio</span> Pial
              </h4>
              <h4>Based in Bangladesh</h4>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-[50px] 2xl:gap-[67px]">
          <p className="md:block hidden underline cursor-pointer">Resume</p>
          <button
            className="px-3 sm:px-5 py-[6px] border-[.5px] border-white tracking-[.8px] rounded-[20px] 
          font-medium   bg-hover 
          text-xs sm:text-base 2xl:text-xl bg-white text-black

          "
            ref={props.addToRefs}
          >
            Get in touch
          </button>
          <div className="relative flex justify-center items-center">
            <div ref={props.addToRefs}>
              {!isActive ? (
                <HamburgerIcon
                  onClick={() => setIsActive(!isActive)}
                  className={`p-1 transition-all duration-500 ease-in-out  ${
                    !isActive ? " visible" : " invisible"
                  }`}
                />
              ) : (
                <Cross
                  onClick={() => setIsActive(!isActive)}
                  className={`transition-all duration-500 ease-in-out  ${
                    isActive ? " visible" : " invisible"
                  }`}
                />
              )}
            </div>

            <ul
              ref={props.addToRefs}
              className={`absolute text-end space-y-4 right-0 top-10 
              transition-all duration-500 ease-in-out overflow-hidden
              text-xs sm:text-base xl:text-xl 2xl:text-2xl
              ${
                isActive
                  ? "opacity-1 translate-x-0 visible"
                  : "opacity-0 translate-x-[50px] invisible"
              }`}
            >
              <li>About</li>
              <li>Blog</li>
              <li>Store</li>
              <li className="block md:hidden underline">Resume</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
});
export default PrimaryNavbar;
