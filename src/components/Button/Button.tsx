import React from "react";

type ButtonProps = {
  onClickAction: () => void;
  title: string;
  typeButton: "primary" | "secondary" | "default";
};

const Button: React.FC<ButtonProps> = ({
  onClickAction,
  title,
  typeButton,
}) => {
  let buttonClass = "px-4 py-2 font-semibold tracking-widest ";

  switch (typeButton) {
    case "primary":
      buttonClass += "bg-transparent border-[1px] border-white text-white text-xs";
      break;
    case "secondary":
      buttonClass += "bg-[#F17A36] text-white text-xs";
      break;
    default:
      buttonClass += "bg-gray-200 text-gray-700";
  }

  return (
    <button className={buttonClass} onClick={onClickAction}>
      {title}
    </button>
  );
};

export default Button;
