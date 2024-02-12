import Image from "next/image";
import * as React from "react";
import CouteCard from "../Card/CouteCard";
export interface ICoutesCardSectionProps {
  addToRefs: any;
}

export default React.forwardRef(function CoutesCardSection(
  props: ICoutesCardSectionProps,
  ref: any
) {
  return (
    <section className="overflow-hidden bg-black">
      <div className=" ">
        <CouteCard />
        <CouteCard />
        <CouteCard />
        <CouteCard />
      </div>
    </section>
  );
});
