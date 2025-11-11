"use client";

import React from "react";
import { EllipsisVertical } from "lucide-react";
import Table from "../atoms/Table";
import TableRow from "../atoms/TableRow";
import TableCell from "../atoms/TableCell";

const CajaTable = () => {
  const movimientos = [
    {
      id: 1,
      tipo: "ingreso",
      descripcion: "Pago plan Juan Pérez",
      metodo_pago: "Transferencia",
      monto: 10000,
      fecha: "2025-11-07",
      usuario: "Juan Pérez",
      categoria: "plan",
    },
    {
      id: 2,
      tipo: "ingreso",
      descripcion: "Pago en efectivo Lucía Gómez",
      metodo_pago: "Efectivo",
      monto: 8000,
      fecha: "2025-11-06",
      usuario: "Lucía Gómez",
      categoria: "plan",
    },
    {
      id: 3,
      tipo: "egreso",
      descripcion: "Mantenimiento de máquinas",
      metodo_pago: "Transferencia",
      monto: 2000,
      fecha: "2025-11-05",
      categoria: "mantenimiento",
    },
    {
      id: 4,
      tipo: "egreso",
      descripcion: "Compra de toallas",
      metodo_pago: "Débito",
      monto: 12000,
      fecha: "2025-11-04",
      categoria: "compra",
    },
    {
      id: 5,
      tipo: "ingreso",
      descripcion: "Pago familiar plan grupal",
      metodo_pago: "Transferencia",
      monto: 30000,
      fecha: "2025-11-04",
      usuario: "Familia González",
      categoria: "plan",
    },
    {
      id: 6,
      tipo: "egreso",
      descripcion: "Reparación de aire acondicionado",
      metodo_pago: "Transferencia",
      monto: 7000,
      fecha: "2025-11-02",
      categoria: "mantenimiento",
    },
    {
      id: 7,
      tipo: "ingreso",
      descripcion: "Pago de nuevo cliente (Ana Torres)",
      metodo_pago: "Efectivo",
      monto: 15000,
      fecha: "2025-11-01",
      usuario: "Ana Torres",
      categoria: "plan",
    },
    {
      id: 8,
      tipo: "egreso",
      descripcion: "Compra de mancuernas 10kg",
      metodo_pago: "Crédito",
      monto: 25000,
      fecha: "2025-10-31",
      categoria: "compra",
    },
    {
      id: 9,
      tipo: "ingreso",
      descripcion: "Renovación de plan premium",
      metodo_pago: "Transferencia",
      monto: 40000,
      fecha: "2025-10-30",
      usuario: "Luis Rivas",
      categoria: "plan",
    },
    {
      id: 10,
      tipo: "egreso",
      descripcion: "Sueldos de empleados",
      metodo_pago: "Transferencia",
      monto: 120000,
      fecha: "2025-10-30",
      categoria: "egreso fijo",
    },
  ];
  return (
    <>
      <Table
        headers={[
          "#",
          "Descripción",
          "Método de pago",
          "Categoría",
          "Monto",
          "Fecha",
          "",
        ]}
        data={movimientos}
        renderRow={(m) => (
          <TableRow key={m.id}>
            <TableCell first className="font-semibold text-gray-700">
              #{m.id}
            </TableCell>

            <TableCell>
              <div>
                <p className="font-medium text-gray-800">{m.descripcion}</p>
                {m.usuario && (
                  <p className="text-sm text-gray-500">{m.usuario}</p>
                )}
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm text-gray-600">{m.metodo_pago}</span>
            </TableCell>

            <TableCell>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  m.tipo === "ingreso"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {m.categoria}
              </span>
            </TableCell>

            <TableCell>
              <span
                className={`font-semibold ${
                  m.tipo === "ingreso" ? "text-green-600" : "text-red-600"
                }`}
              >
                {m.tipo === "ingreso"
                  ? `+$${m.monto.toLocaleString()}`
                  : `-$${m.monto.toLocaleString()}`}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm text-gray-500">{m.fecha}</span>
            </TableCell>

            <TableCell last align="left">
              <div className="w-full flex items-center justify-end">
                <div className="h-10 w-10 bg-gray-300/20 rounded-xl flex items-center justify-center">
                  <EllipsisVertical size={20} />
                </div>
              </div>
            </TableCell>
          </TableRow>
        )}
      ></Table>
    </>
  );
};

export default CajaTable;
