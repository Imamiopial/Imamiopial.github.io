import Link from "next/link";
import * as React from "react";

export interface IPrimaryButtonProps {}

const PrimaryButton = React.forwardRef(function Button(
  props: IPrimaryButtonProps,
  ref: any
) {
  return (
    <>
      <div ref={ref}>
        <Link
          href={"/projects"}
          className="float-right m-6 px-3 py-2 rounded-lg bg-violet-600 mix-blend-difference
          hover:bg-white hover:text-black
          "
        >
          Click Me
        </Link>
      </div>
    </>
  );
});
export default PrimaryButton;
