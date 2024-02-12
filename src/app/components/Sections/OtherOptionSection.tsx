import * as React from "react";
import OtherOption from "../Option/OtherOption";

export interface IOtherOptionSectionProps {
  addToRefs: any;
}

export default function OtherOptionSection(props: IOtherOptionSectionProps) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] pt-[90px]
    2xl:px-[10%]
    "
    >
      <OtherOption
        title="Other projects"
        imageUrl="/images/products/spotify.png"
        actionText="Explore"
        addToRefs={props.addToRefs}
      />
      <OtherOption
        title="Blogs"
        imageUrl="/Images/blog/consistancy.png"
        actionText="Visit Blogs"
        addToRefs={props.addToRefs}
      />
      <OtherOption
        title="Store"
        imageUrl="/Images/store/streaming.png"
        actionText="Explore Products"
        addToRefs={props.addToRefs}
      />
    </section>
  );
}
