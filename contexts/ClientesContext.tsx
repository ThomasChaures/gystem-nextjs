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
      {
        id: 3,
        nombre: "Martín",
        apellido: "Fernández",
        dni: 37890432,
        rutina: true,
        adeudado: false,
      },
      {
        id: 4,
        nombre: "Camila",
        apellido: "Rodríguez",
        dni: 41234876,
        rutina: false,
        adeudado: true,
      },
      {
        id: 5,
        nombre: "Santiago",
        apellido: "Lopez",
        dni: 38567210,
        rutina: true,
        adeudado: false,
      },
      {
        id: 6,
        nombre: "Valentina",
        apellido: "Torres",
        dni: 39988765,
        rutina: true,
        adeudado: false,
      },
      {
        id: 7,
        nombre: "Federico",
        apellido: "Martínez",
        dni: 41765982,
        rutina: false,
        adeudado: true,
      },
      {
        id: 8,
        nombre: "Sofía",
        apellido: "Ruiz",
        dni: 39444567,
        rutina: true,
        adeudado: false,
      },
      {
        id: 9,
        nombre: "Agustín",
        apellido: "Castro",
        dni: 40678900,
        rutina: false,
        adeudado: true,
      },
      {
        id: 10,
        nombre: "Carolina",
        apellido: "Méndez",
        dni: 38877654,
        rutina: true,
        adeudado: false,
      },
      {
        id: 11,
        nombre: "Tomás",
        apellido: "Benítez",
        dni: 40234567,
        rutina: false,
        adeudado: false,
      },
      {
        id: 12,
        nombre: "Julieta",
        apellido: "Silva",
        dni: 39544321,
        rutina: true,
        adeudado: true,
      },
    ]);
  }, []);

  const addCliente = (cliente: Cliente) =>
    setClientes((prev) => [...prev, cliente]);
  const removeCliente = (id: number) =>
    setClientes((prev) => prev.filter((c) => c.id !== id));
  const updateCliente = (updated: Cliente) => {
    setClientes((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  };

  return (
    <ClientesContext.Provider
      value={{ clientes, addCliente, removeCliente, updateCliente }}
    >
      {children}
    </ClientesContext.Provider>
  );
};
