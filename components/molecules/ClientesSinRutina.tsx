import React from "react";
import type { Cliente } from "@/types/user.types";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ClientesSinRutina = ({ data }: { data: Cliente[] }) => {
  return (
    <>
      <div className="space-y-2.5">
        {data &&
          data.map((c) => (
            <>
              <Card key={c.id} className="w-full flex p-0! py-5! border-[#d1d1d1]/30 rounded-none border-b! max-sm:p-2! items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className=" h-10 w-10 rounded-xl flex items-center justify-center">
                    <Image
                      src="/user.png"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-xl"
                    />
                  </div>
                  {c.nombre} {c.apellido}
                </div>

                <Button variant="link" className="max-sm:p-2 text-[14px]">
                  <Plus size={20} />
                  <span className="max-sm:hidden">Agregar rutina</span>
                </Button>
              </Card>
            </>
          ))}
      </div>
    </>
  );
};

export default ClientesSinRutina;
