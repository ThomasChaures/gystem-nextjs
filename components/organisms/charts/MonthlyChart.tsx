import React, { useState } from "react";

const data = [
  { month: "Mar", value: 600000 },
  { month: "Abr", value: 500500 },
  { month: "May", value: 500000 },
  { month: "Jun", value: 515000 },
  { month: "Jul", value: 509000 },
  { month: "Ago", value: 578500 },
  { month: "Sep", value: 509500 },
  { month: "Oct", value: 508800 },
  { month: "Nov", value: 700000 },
];

const MonthlyChart = () => {
  const [active, setActive] = useState<number | null>(8);
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className=" font-sans max-w-[600px] w-full">
      <div className="mb-14">
        <h3 className=" mb-2 font-semibold">Ingresos Mensuales</h3>
        <h2 className="text-3xl font-semibold text-[#111] mb-6">
          ${active !== null ? data[active].value.toLocaleString() : "—"}
        </h2>
      </div>

      {/* Contenedor del gráfico */}
      <div className="relative flex items-end justify-center gap-6 h-50">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          const isActive = active === index;

          return (
            <div
              key={item.month}
              onMouseEnter={() => setActive(index)}
              className="relative flex flex-col items-center justify-end overflow-visible cursor-pointer w-20 h-full"
            >
              {/* Barra */}
              <div
                className={`transition-all duration-300 w-full rounded-md ${
                  isActive
                    ? "bg-amber-400 shadow-2xl shadow-amber-400"
                    : "bg-gray-300"
                }`}
                style={{ height: `${height}%`, minHeight: "10px" }}
              />

              {/* Tooltip dinámico — se ubica sobre la barra */}
              {isActive && (
                <div
                  className="absolute bg-[#333] text-white text-xs font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-200"
                  style={{
                    bottom: `calc(${height}% + 40px)`,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  ${item.value.toLocaleString("es-AR")}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-[#333]" />
                </div>
              )}

              {/* Mes */}
              <p
                className={`text-sm mt-2 font-semibold ${
                  isActive ? "text-[#333] " : "text-gray-500"
                }`}
              >
                {item.month}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyChart;
