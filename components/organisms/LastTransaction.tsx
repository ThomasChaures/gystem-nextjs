import { Dumbbell, EllipsisVertical } from "lucide-react";
import Image from "next/image";

export default function LastTransactions() {
  const transactions = [
    {
      id: 1,
      user_picture: "user-1.jpg",
      name: "Juan Pérez",
      date: "07 Nov",
      amount: 10000,
      method: "Mercado Pago",
      type: "income",
    },
    {
      id: 2,
      user_picture: "user-3.jpg",
      name: "Lucía Gómez",
      date: "06 Nov",
      amount: 8000,
      method: "Efectivo",
      type: "income",
    },
    {
      id: 3,
      name: "Mantenimiento máquinas",
      date: "05 Nov",
      amount: -2000,
      method: "Transferencia",
      type: "expense",
    },
    {
      id: 4,
      user_picture: "user-1.jpg",
      name: "Manuel Lolete",
      date: "06 Nov",
      amount: 3000,
      method: "Efectivo",
      type: "income",
    },
  ];

  return (
    <div className="rounded-3xl h-105 w-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex w-full justify-between items-center mb-7">
        <h2 className="font-semibold text-xl text-gray-800">Últimas transacciones</h2>
        <button className="bg-black px-2 py-1 rounded-full text-sm text-white">
          Ver todas
        </button>
      </div>

      {/* Transactions list */}
      <div className="space-y-3 flex flex-col w-full h-full overflow-y-auto">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100"
          >
            {/* Izquierda */}
            <div className="flex items-center gap-x-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                {t.user_picture ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={`/users/${t.user_picture}`}
                      alt="Foto del usuario"
                      fill
                      className="object-cover"
                      sizes="50px"
                    />
                  </div>
                ) : (
                  <Dumbbell className="w-5 h-5 text-gray-400" />
                )}
              </div>

              <div className="flex flex-col">
                <p className="text-[15px] font-medium text-gray-800">
                  {t.name}
                </p>
                <p className="text-[13px] text-gray-500">{t.date}</p>
              </div>
            </div>

            {/* Derecha */}
            <div className="flex items-center gap-x-6">
              {/* Precio centrado verticalmente */}
              <div className="flex flex-col items-center justify-center">
                <p className={`text-[15px] font-semibold `}>
                  {t.type === "income"
                    ? `+$${t.amount.toLocaleString()}`
                    : `-$${Math.abs(t.amount).toLocaleString()}`}
                </p>
              </div>

              {/* Método + menú */}
              <div className="flex items-center gap-x-3">
                <p className="text-[14px] text-gray-600 whitespace-nowrap">
                  {t.method}
                </p>
                <div className="h-10 w-10 bg-gray-300/20 rounded-xl flex items-center justify-center">
                  <EllipsisVertical size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
