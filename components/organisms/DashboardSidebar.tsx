"use client";
import { IconTreadmill } from "@tabler/icons-react";
import {
  Users,
  NotebookText,
  BadgeQuestionMark,
  GamepadDirectional,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import LinkSidebarDashboard from "../atoms/LinkSidebarDashboard";
import useLayout from "@/hooks/useLayout";

const DashboardSidebar = () => {
  const { openLayout, handleLayout } = useLayout();

  return (
    <aside
      onMouseEnter={() => handleLayout(true)}
      onMouseLeave={() => handleLayout(false)}
      className={`fixed left-10 top-1/2 -translate-y-1/2 rounded-2xl border border-[#EBEBEA] text-black
        bg-white backdrop-blur-md shadow-lg overflow-hidden 
        transition-[width,transform,background-color] duration-500 ease-in-out 
        h-[92vh] flex flex-col justify-between
        ${openLayout ? "w-[300px]" : "w-[90px]"}`}
    >
      {/* Contenido superior */}
      <div>
        {/* Logo */}
        <div
          className={`
            flex items-center justify-center w-full pb-8 mt-16
            transition-all duration-500 ease-in-out
            ${openLayout ? "px-10" : "px-0"}
          `}
        >
          <GamepadDirectional
            size={40}
            fill="#333"
            className="text-[#333] transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Navegación principal */}
        <nav className="mt-8 w-full">
          <ul
            className={`${
              openLayout ? "px-10" : ""
            } w-full items-start space-y-4`}
          >
            <LinkSidebarDashboard
              icon={LayoutDashboard}
              route="/panel"
              name="Panel"
            />
            <LinkSidebarDashboard
              icon={Users}
              route="/panel/clientes"
              name="Clientes"
            />
            <LinkSidebarDashboard
              icon={IconTreadmill}
              route="/panel/ejercicios"
              name="Ejercicios"
            />
            <LinkSidebarDashboard
              icon={NotebookText}
              route="/panel/rutinas"
              name="Rutinas"
            />
          </ul>
        </nav>
      </div>

      {/* Contenido inferior */}
      <div>
        <div className="border-t border-[#333]/20 mx-3 mb-5" />
        <nav className="pb-5 w-full">
          <ul
            className={`${
              openLayout ? "px-10" : ""
            } w-full items-start space-y-4`}
          >
            <LinkSidebarDashboard
              name="Ayuda"
              route="/ayuda"
              icon={BadgeQuestionMark}
            />

            <LinkSidebarDashboard
              name="Cerrar sesión"
              route="/logout"
              icon={LogOut}
            />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
