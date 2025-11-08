import React from "react";
import { User } from "lucide-react";

const HeaderDashboard = () => {
  return (
    <div className="bg-white border flex items-center gap-x-2.5 right-15 top-8 backdrop-blur-md shadow-lg  absolute border-[#EBEBEA] p-3 rounded-xl">
      <p className="font-semibold">Thomas Chaures</p>
      <div className="bg-[#333] h-8 w-8 flex items-center justify-center rounded-xl">
        <User fill="white" color="white" />
      </div>
    </div>
  );
};

export default HeaderDashboard;
