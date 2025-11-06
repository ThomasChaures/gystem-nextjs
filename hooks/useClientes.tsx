"use client";

import { useContext } from "react";
import { ClientesContext } from "@/contexts/ClientesContext";

const useClientes = () => {
  const context = useContext(ClientesContext);
  if (!context) {
    throw new Error("useClientes se debe usar dentro de un ClientesProvider");
  }
  return context;
};

export default useClientes;
