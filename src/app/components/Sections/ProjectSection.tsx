import Image from "next/image";
import * as React from "react";
import ProjectDetailsCard from "../Card/ProjectDetailsCard";
export interface IProjectSectionProps {
  addToRefs: any;
}

export default React.forwardRef(function ProjectSection(
  props: IProjectSectionProps,
  ref: any
) {
  return (
    <div className="space-y-[56px] 2xl:px-[10%]">
      <ProjectDetailsCard
        addToRefs={props.addToRefs}
        title="Ecotravel"
        imageUrl="/Images/projects/ecotravel.png"
        description="A user-focused redesign of Spotify's interface, optimizing music discovery and enjoyment."
        date="January 25th 2022"
        platform="Mobile App"
        tools="Adobe XD"
      />
      <ProjectDetailsCard
        addToRefs={props.addToRefs}
        title="ReferZip"
        imageUrl="/Images/otherProjects/referzip.png"
        description="A user-focused redesign of Spotify's interface, optimizing music discovery and enjoyment."
        date="January 25th 2022"
        platform="Mobile App"
        tools="Adobe XD"
      />
      <ProjectDetailsCard
        addToRefs={props.addToRefs}
        title="OnePark"
        imageUrl="/Images/projects/OnePark.png"
        description="A user-focused redesign of Spotify's interface, optimizing music discovery and enjoyment."
        date="January 25th 2022"
        platform="Mobile App"
        tools="Adobe XD"
      />
    </div>
  );
});
