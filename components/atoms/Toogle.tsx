import React from "react";

const Toogle = ({ name, click, active }: { name: string; click?: () => void , active?: boolean}) => {
  return <span
    className={`px-2 py-1 text-xs inline-block border border-[#333]/70 rounded-full cursor-pointer ${active ? "bg-[#333] text-white" : ''}`}
  onClick={click}>{name}</span>;
};

export default Toogle;
