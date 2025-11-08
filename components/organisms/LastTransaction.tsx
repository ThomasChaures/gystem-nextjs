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
    <div className=" rounded-3xl   flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 font-semibold text-[15px]">
          Últimas transacciones
        </h2>
        <button className="text-amber-500 text-sm font-medium hover:underline">
          Ver todas
        </button>
      </div>

      {/* Transactions list */}
      <div className="space-y-3">
        {transactions.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between border-b border-[#333]/20 last:border-b-0 py-4 last:pb-0"
          >
            <div className="flex items-center gap-x-3">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  t.type === "income"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {t.type === "income" ? (
                  <ArrowUpRight className="w-3.5 h-3.5" />
                ) : (
                  <ArrowDownRight className="w-3.5 h-3.5" />
                )}
              </div>
              <div>
                <p className="text-[14px] font-medium text-gray-800 leading-tight">
                  {t.name}
                </p>
                <p className="text-[13px] text-gray-500">
                  {t.method} · {t.date}
                </p>
              </div>
            </div>
            <p
              className={`text-[14px] font-semibold ${
                t.type === "income" ? "text-green-600" : "text-red-600"
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
