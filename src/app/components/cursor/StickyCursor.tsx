"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export interface IStickyCursorProps {
  actionElements: any;
}
export default function StickyCursor(props: IStickyCursorProps) {
  const [isHover, setIsHover] = useState(false);
  const cursorSize = isHover ? 100 : 20;
  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };
  const smoothOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };
  const manageMouseOver = () => {
    setIsHover(true);
  };
  const manageMouseLeave = () => {
    setIsHover(false);
  };
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    props.actionElements?.current?.forEach((el: any, index: number) =>
      el.addEventListener("mouseover", manageMouseOver)
    );
    props.actionElements?.current?.forEach((el: any, index: number) =>
      el.addEventListener("mouseleave", manageMouseLeave)
    );

    return () => {
      props.actionElements?.current?.forEach((el: any, index: number) =>
        el.addEventListener("mouseover", manageMouseOver)
      );
      props.actionElements?.current?.forEach((el: any, index: number) =>
        el.addEventListener("mouseleave", manageMouseLeave)
      );

      window.removeEventListener("mousemove", manageMouseMove);
    };
  });
  return (
    <>
      <motion.div
        animate={{ width: cursorSize, height: cursorSize }}
        className="w-5 h-5 rounded-full bg-white fixed"
        style={{ left: smoothMouse.x, top: smoothMouse.y }}
      ></motion.div>
    </>
  );
}
