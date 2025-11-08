import React from "react";
import { User } from "lucide-react";

const HeaderDashboard = () => {
  return (
    <div className="border flex items-center max-md:top-5 max-md:right-5.5 max-md:p-2 gap-x-2.5 right-15 top-8 rounded-2xl  border-[#EBEBEA] text-black
        bg-white backdrop-blur-md absolute p-3 ">
      <p className="font-semibold">Thomas Chaures</p>
      <div className="bg-[#333] h-8 w-8 flex items-center justify-center rounded-xl">
        <User fill="white" color="white" />
      </div>
    </div>
  );
};

export default HeaderDashboard;
