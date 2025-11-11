"use client";
import {
  Users,
  NotebookText,
  BadgeQuestionMark,
  Dumbbell,
  LayoutDashboard,
  LogOut,
  Wallet,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import LinkSidebarDashboard from "../atoms/LinkSidebarDashboard";

export default function DashboardSidebarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 left-5 z-50 bg-white border border-gray-200 rounded-xl p-2 shadow-md md:hidden"
      >
        <Menu size={28} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar móvil */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-lg z-50 
        flex flex-col justify-between w-72 px-6 py-8 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-x-3">
             <Dumbbell
            size={36}
            fill="#333"
            className="text-[#333] transition-transform duration-500 ease-in-out"
          />
            <h2 className="text-lg font-semibold text-gray-800">Gymstem</h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navegación */}
        <nav className="flex-1">
          <ul className="space-y-5">
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
              icon={NotebookText}
              route="/panel/rutinas"
              name="Rutinas"
            />
            <LinkSidebarDashboard
              icon={Wallet}
              route="/panel/caja"
              name="Caja"
            />
          </ul>
        </nav>

        {/* Inferior */}
        <div className="border-t border-gray-200 pt-5">
          <ul className="space-y-5">
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
        </div>
      </aside>
    </>
  );
}
