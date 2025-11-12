import Image from "next/image";
import { Search, Bell } from "lucide-react";
const HeaderDashboard = () => {
  return (
    <>
      <div
        className="fixed flex items-center justify-between w-full border-b border-[#d1d1d1] z-2 text-black
       backdrop-blur-md h-26 bg-white  px-7 pr-12.5 ml-[290px] md:w-[calc(100%-280px)]"
      >
        <div className="h-full flex items-center">
          <div className="relative">
            <Search className="absolute top-1/2 transform  -translate-y-1/2 left-3 " />
            <input
              type="text"
              placeholder="Busca por cliente, rutina o movimientos..."
              className="  px-2 bg-gray-300/20 pl-12 py-3 w-120 rounded-xl"
            />
          </div>
        </div>

        <div className="flex h-12 items-center gap-x-4">
          <div className="h-12 w-12 bg-gray-300/20  rounded-xl flex items-center justify-center">
            <Bell color="#000201" />
          </div>


        <div className="h-full w-[2.5px] opacity-30 bg-[#d1d1d1] block">

        </div>

          <div className="flex items-center gap-x-2.5">
            <div className="h-12 w-12 bg-gray-300/20 overflow-hidden  rounded-xl flex items-center justify-center">
            <Image src={'/users/user-admin.jpg'} alt="user logo" width={60} height={60} />
          </div>
            <div>
              <p className="font-medium ">Thomas Chaures</p>
              <span className="font-sans font-medium text-sm opacity-60">Manager</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDashboard;
