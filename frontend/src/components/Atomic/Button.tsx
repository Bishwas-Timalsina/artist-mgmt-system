import React from "react";
import Text from "./Text";

interface IButtonProps {
  label?: string;
  onclick: () => void;
  icon?: React.ReactNode;
  style?: any;
  className?: string;
}
const Button = (props: IButtonProps) => {
  const { label, onclick, icon, style, className } = props;
  return (
    <>
      <div
        onClick={onclick}
        style={style}
        className={`flex flex-row  items-center gap-1 px-2 py-3 bg-white rounded-sm w-[150px] cursor-pointer ${className} ${
          icon ? "justify-between" : "justify-center"
        }`}
      >
        <Text
          size="16px"
          weight="400"
          color={style ? "#fff" : "#000"}
          content={label}
        />
        {icon}
      </div>
    </>
  );
};

export default Button;
