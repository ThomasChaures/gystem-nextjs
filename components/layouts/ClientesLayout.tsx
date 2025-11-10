"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell, NotebookText, LogOut } from "lucide-react";
import Image from "next/image";

const ClientesLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white w-full py-5 shadow-sm relative z-50">
        <div className="mx-auto w-full flex items-center justify-between max-w-[1200px] px-5">
          {/* Botón mobile */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden bg-white border border-gray-200 rounded-xl p-2 shadow-sm"
          >
            <Menu size={24} />
          </button>

          <h1 className="text-2xl font-bold uppercase tracking-wider text-[#333]">
            Gymstem
          </h1>

          <nav className="hidden md:block">
            <ul className="flex gap-6 items-center text-gray-700 font-medium">
              <li>
                <Link href="/" className="hover:text-black">
                  Rutina
                </Link>
              </li>
              <li className="rounded-full overflow-hidden">
                <Image
                  src="/user.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
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
        {/* Header sidebar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-x-2">
            <h2 className="font-bold uppercase tracking-wider text-[#333]">Gymstem</h2>
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
          <ul className="space-y-5 text-gray-700 font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-x-3 hover:text-black transition"
              >
                <NotebookText size={22} />
                Rutina
              </Link>
            </li>
          </ul>
        </nav>

        {/* Inferior */}
        <div className="border-t border-gray-200 pt-5">
          <ul className="space-y-5 text-gray-700 font-medium">
            <li>
              <Link
                href="/logout"
                onClick={() => setOpen(false)}
                className="flex items-center gap-x-3 text-red-600 hover:text-red-700 transition"
              >
                <LogOut size={22} />
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="max-w-[1200px] mx-auto ">{children}</main>
    </>
  );
};

export default ClientesLayout;
