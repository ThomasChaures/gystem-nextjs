"use client";

import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  CircleDashed,
} from "lucide-react";
import LinkSidebarDashboard from "../atoms/LinkSidebarDashboard";
import useLayout from "@/hooks/useLayout";

const DashboardSidebar = () => {
  const { openLayout, handleLayout } = useLayout();
  return (
    <aside
      className={`fixed bg-black text-white top-0 transition-all px-4  h-screen ${
        openLayout ? "w-[300px]" : "w-20"
      } overflow-hidden`}
    >
      <div
        className={`absolute transition-all  top-3 ${
          openLayout ? "left-65" : "left-1/2 transform translate-[-50%] top-6"
        }`}
      >
        {openLayout ? (
          <ArrowLeftFromLine
            size={20}
            className="cursor-pointer"
            onClick={() => {
              handleLayout(false);
            }}
          />
        ) : (
          <ArrowRightFromLine
            size={20}
            className="cursor-pointer"
            onClick={() => handleLayout(true)}
          />
        )}
      </div>
      <div
        className={`${
          openLayout ? "px-10" : "justify-center"
        } transition-all mt-17  pb-8  flex items-center  gap-x-2.5   w-full`}
      >
        <CircleDashed size={30} />
        <h1
          className={`${
            openLayout ? "px-2" : "sr-only"
          } text-2xl font-semibold`}
        >
          MiGystem
        </h1>
      </div>
      <nav className="mt-8 w-full">
        <ul
          className={`${
            openLayout ? "px-10" : ""
          } w-full items-start space-y-4`}
        >
          <LinkSidebarDashboard route="/panel" name="Panel">
            <CircleDashed />
          </LinkSidebarDashboard>
          <LinkSidebarDashboard name="Clientes" route="/panel/clientes">
            <CircleDashed />
          </LinkSidebarDashboard>
          <LinkSidebarDashboard name="Ejercicios" route="/panel/ejercicios">
            <CircleDashed />
          </LinkSidebarDashboard>
          <LinkSidebarDashboard name="Rutinas" route="/rutinas">
            <CircleDashed />
          </LinkSidebarDashboard>
        </ul>
      </nav>
      <nav className="pt-8 mt-8  pb-5  w-full ">
        <ul
          className={`${
            openLayout ? "px-10" : ""
          } w-full items-start space-y-4`}
        >
          <LinkSidebarDashboard name="Ayuda" route="/ayuda">
            <CircleDashed />
          </LinkSidebarDashboard>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
