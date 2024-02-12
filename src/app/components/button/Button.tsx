import * as React from "react";

export interface IBasicButtonProps {
  text: string;
}

export default function BasicButton(props: IBasicButtonProps) {
  return (
    <button
      className="py-2 px-5  border-[.5px] border-white tracking-[.8px] rounded-[20px] 
          font-medium
          "
    >
      {props.text ? props.text : "Get in touch"}
    </button>
  );
}
