import React, { useEffect, useState } from "react";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import { MessageCircle, Trash2 } from "lucide-react";
import type { Cliente } from "@/types/user.types";
import Image from "next/image";

const ClientesAdeudados = ({ data }: { data: Cliente[] }) => {
  return (
    <>
      <div className="space-y-2.5">
        {data &&
          data.map((c) => (
            <>
              <Card
                key={c.id}
                className="w-full flex p-3! max-sm:p-2! items-center justify-between"
              >
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

                <div className="flex items-center gap-x-2.5">
                  <Button variant="link" className="max-sm:p-2 text-[14px]">
                  <MessageCircle size={20} />
                  <span className="max-sm:hidden">Notificar</span>
                </Button>
                <Button variant="link" className="max-sm:p-2 bg-red-500 hover:bg-red-700 text-[14px]">
                  <Trash2 size={20} />
                </Button>
                </div>
              </Card>
            </>
          ))}
      </div>
    </>
  );
};

export default ClientesAdeudados;
