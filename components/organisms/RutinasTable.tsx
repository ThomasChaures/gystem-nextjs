"use client";

import React from "react";
import { EllipsisVertical } from "lucide-react";
import Table from "../atoms/Table";
import TableRow from "../atoms/TableRow";
import TableCell from "../atoms/TableCell";

const RutinasTable = () => {
  const rutinas = [
    { id: 1, cliente: "María Gómez" },
    { id: 2, cliente: "Lucas Fernández" },
    { id: 3, cliente: "Sofía Martínez" },
    { id: 4, cliente: "Juan Pérez" },
    { id: 5, cliente: "Ana López" },
  ];
  return (
    <>
      <Table
        headers={["#", "Cliente", ""]}
        data={rutinas}
        renderRow={(rutina) => (
          <TableRow key={rutina.id}>
            <TableCell first># {rutina.id}</TableCell>
            <TableCell>{rutina.cliente}</TableCell>
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

export default RutinasTable;
