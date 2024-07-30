import React from "react";

interface ITextProps {
  content?: string;
  size?: string;
  weight?: string;
  color?: string;
  lineHeight?: string;
  className?: string;
}

const Text = (props: ITextProps) => {
  const {
    size,
    weight,
    content,
    color = "#000",
    lineHeight = "24px",
    className,
  } = props;
  return (
    <>
      <div
        style={{
          fontSize: size,
          fontWeight: weight,
          color: color,
          lineHeight: lineHeight,
        }}
        className={`text-[16px] font-[500] ${className}`}
      >
        {content}
      </div>
    </>
  );
};

export default Text;
