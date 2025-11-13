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
        gym: "SkyGym",
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        phone: "1134556677",
        dni: "40123456",
        status: "active",
        picture: "user-1.jpeg",
        start_date: "2025-01-05",
        created_at: "2025-01-05",
        updated_at: "2025-11-12",
      },
      {
        id: 2,
        gym: "SkyGym",
        name: "Lucía Gómez",
        email: "lucia.gomez@example.com",
        phone: "1144558899",
        dni: "39222444",
        status: "overdue",
        picture: "user-2.jpeg",
        start_date: "2025-02-10",
        created_at: "2025-02-10",
        updated_at: "2025-11-12",
      },
      {
        id: 3,
        gym: "SkyGym 44",
        name: "Carlos Fernández",
        email: "carlos.fer@example.com",
        phone: "1122334455",
        dni: "38555666",
        status: "inactive",
        picture: "user-3.jpeg",
        start_date: "2025-03-01",
        created_at: "2025-03-01",
        updated_at: "2025-11-12",
      },
      {
        id: 4,
        gym: "SkyGym",
        name: "María López",
        email: "maria.lop@example.com",
        phone: "1177889900",
        dni: "37444555",
        status: "active",
        picture: "user-4.jpeg",
        start_date: "2025-04-15",
        created_at: "2025-04-15",
        updated_at: "2025-11-12",
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
