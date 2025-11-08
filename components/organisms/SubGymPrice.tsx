import React from "react";
import { Ellipsis } from "lucide-react";

const SubGymPrice = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className=" font-semibold ">Planes</h2>
        <Ellipsis />
      </div>

      <div className="flex flex-col h-full items-center justify-center">
        <span className="text-amber-400 bg-amber-50/10 border border-amber-400 mb-10  px-4 py-2 rounded-full ">Plan individual</span>
        <p className="text-5xl font-semibold">$35.000</p>
      </div>
    </>
  );
};

export default SubGymPrice;
