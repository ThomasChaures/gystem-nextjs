import React from "react";

interface ToggleProps {
  name: string;
  click?: () => void;
  active?: boolean;
}

const Toogle: React.FC<ToggleProps> = ({ name, click, active }) => {
  return (
    <span
      onClick={click}
      className={`
        px-3 py-1.5 rounded-lg hover:bg-[#333] border text-sm  cursor-pointer transition-all duration-200
        ${active
          ? "bg-[#333] text-white border-[#333]"
          : "bg-gray-300/20 border-transparent   hover:bg-gray-50"}
      `}
    >
      {name}
    </span>
  );
};

export default Toogle;
