import React from "react";
import { Ellipsis } from "lucide-react";

const SubGymPrice = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-[17px] sm:text-lg">Planes</h2>
        <Ellipsis className="text-gray-600" />
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-1 py-10 sm:py-14">
        {/* Badge */}
        <span
          className="text-amber-500 border border-amber-400/80 bg-amber-50/20 font-medium 
          px-6 py-2 rounded-full text-sm sm:text-base mb-10 whitespace-nowrap
          transition-all duration-200 hover:bg-amber-400/10"
        >
          Plan individual
        </span>

        {/* Precio */}
        <p className="text-4xl sm:text-5xl font-semibold text-[#111]">$35.000</p>
      </div>
    </div>
  );
};

export default SubGymPrice;
