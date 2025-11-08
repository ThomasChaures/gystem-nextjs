import React from "react";

interface ToggleProps {
  name: string;
  click?: () => void;
  active?: boolean;
}

const Toogle: React.FC<ToggleProps> = ({ name, click, active }) => {
  return (
    <button
      onClick={click}
      className={`
        px-3 py-1.5 rounded-full border text-sm font-medium cursor-pointer transition-all duration-200
        ${active
          ? "bg-[#333] text-white border-[#333]"
          : "border-gray-300 text-gray-700 hover:bg-gray-50"}
      `}
    >
      {name}
    </button>
  );
};

export default Toogle;
