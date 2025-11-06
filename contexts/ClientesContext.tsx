"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import type { Cliente } from "@/types/user.types";

interface ClienteContextType {
  clientes: Cliente[];
  addCliente: (cliente: Cliente) => void;
  removeCliente: (id: number) => void;
  updateCliente: (cliente: Cliente) => void;
}

export const ClientesContext = createContext<ClienteContextType | undefined>(
  undefined
);

export const ClientesProvider = ({ children }: { children: ReactNode }) => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    setClientes([
      {
        id: 1,
        nombre: "Juan",
        apellido: "Pérez",
        dni: 40123456,
        rutina: true,
        adeudado: false,
      },
      {
        id: 2,
        nombre: "Lucía",
        apellido: "Gómez",
        dni: 39222111,
        rutina: false,
        adeudado: true,
      },
    ]);
  }, []);

  const addCliente = (cliente: Cliente) => setClientes((prev) => [...prev, cliente]);
  const removeCliente = (id: number) => setClientes((prev) => prev.filter((c) => c.id !== id));
  const updateCliente = (updated: Cliente) => {
    setClientes((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  }


  return (
    <ClientesContext.Provider value={{clientes, addCliente, removeCliente, updateCliente}}>
        {children}
    </ClientesContext.Provider>
  );
};


