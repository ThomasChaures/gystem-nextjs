import React from "react";
import { Ellipsis } from "lucide-react";

const SubGymPrice = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-[17px] sm:text-lg text-gray-800">
          Planes
        </h2>

        <div className="h-10 w-10 bg-gray-300/20 rounded-xl flex items-center justify-center">
          <Ellipsis className="text-gray-600" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-1 py-10 sm:py-14">
        {/* Badge */}
        <span
          className="text-black border border-black/40 bg-black/10 font-medium 
          px-6 py-2 rounded-full text-sm sm:text-base mb-10 whitespace-nowrap
          transition-all duration-200 hover:bg-black/20"
        >
          Plan individual
        </span>

        {/* Precio */}
        <p className="text-4xl sm:text-5xl font-semibold text-gray-900">
          $35.000
        </p>
      </div>
    </div>
  );
};

export default SubGymPrice;
