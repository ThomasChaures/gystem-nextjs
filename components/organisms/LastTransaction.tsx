import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function LastTransactions() {
  const transactions = [
    {
      id: 1,
      name: "Juan Pérez",
      date: "07 Nov",
      amount: 10000,
      method: "Mercado Pago",
      type: "income",
    },
    {
      id: 2,
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
  ];

  return (
    <div className=" rounded-3xl  w-full  flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex w-full justify-between items-center mb-4">
        <h2 className=" font-semibold ">Últimas transacciones</h2>
        <button className="text-amber-500 text-sm font-medium hover:underline">
          Ver todas
        </button>
      </div>

      {/* Transactions list */}
      <div className="space-y-3 w-full">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex items-center w-full justify-between py-4 border-b border-gray-200 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center gap-x-3">
              {/* Icono circular */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-xl ${
                  t.type === "income"
                    ? "bg-amber-50 text-amber-500"
                    : "bg-red-50 text-red-500"
                }`}
              >
                {t.type === "income" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
              </div>

              {/* Info transacción */}
              <div className="flex w-full flex-col">
                <p className="text-[15px] font-medium text-gray-800 tracking-tight">
                  {t.name}
                </p>
                <p className="text-[13px] text-gray-500 leading-tight">
                  {t.method} · {t.date}
                </p>
              </div>
            </div>

            {/* Monto */}
            <p
              className={`text-[15px] font-semibold ${
                t.type === "income" ? "text-green-600" : "text-red-500"
              }`}
            >
              {t.type === "income"
                ? `+$${t.amount.toLocaleString()}`
                : `-$${Math.abs(t.amount).toLocaleString()}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
