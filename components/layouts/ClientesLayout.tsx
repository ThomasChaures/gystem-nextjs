import React from "react";
import Link from "next/link";
import Button from "../atoms/Button";
import { IconUser } from "@tabler/icons-react";

const ClientesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="bg-white w-full py-5 mx-auto">
           <div className="mx-auto w-full flex items-center justify-between max-w-[1200px]">
             <div className="">
                <h1 className="text-3xl font-bold uppercase tracking-wider">Gystem</h1>
            </div>

            <nav className="">
                <ul className="flex gap-4 items-center">
                    <li>
                        <Link href={''}>Rutina</Link>
                    </li>
                    <li className=" p-2 rounded-full">
                        <img className="w-10 h-10" src="./user.png" alt="" />
                    </li>
                </ul>
            </nav>
           </div>
      </header>

      <main>{children}</main>
    </>
  );
};

export default ClientesLayout;
