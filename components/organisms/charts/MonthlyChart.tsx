import React, { useState, useEffect } from "react";

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
  const [active, setActive] = useState<number>(8);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640); // sm breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Mostrar todos o solo los últimos 5 meses
  const displayedData = isMobile ? data.slice(-5) : data;

  const maxValue = Math.max(...displayedData.map((d) => d.value));

  return (
    <div className="font-sans xl:max-w-[600px] w-full">
      <div className="mb-14">
        <h3 className="mb-2 font-semibold">Ingresos Mensuales</h3>
        <h2 className="text-3xl font-semibold text-[#111] mb-6">
          $
          {active !== null
            ? displayedData[active % displayedData.length].value.toLocaleString(
                "es-AR"
              )
            : "—"}
        </h2>
      </div>

      {/* Contenedor del gráfico */}
      <div className="relative flex items-end justify-center gap-4 sm:gap-6 h-50">
        {displayedData.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          const isActive = active % displayedData.length === index;

          return (
            <div
              key={item.month}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)} // soporte táctil
              className="relative flex flex-col items-center justify-end cursor-pointer w-12 sm:w-20 h-full"
            >
              {/* Barra */}
              <div
                className={`transition-all duration-300 w-full rounded-md ${
                  isActive
                    ? "bg-black shadow-2xl shadow-black"
                    : "bg-gray-300"
                }`}
                style={{ height: `${height}%`, minHeight: "10px" }}
              />

              {/* Tooltip dinámico */}
              {isActive && (
                <div
                  className="absolute bg-[#333] text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md transition-all duration-200 whitespace-nowrap"
                  style={{
                    bottom: `calc(${height}% + 35px)`,
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
                className={`text-xs sm:text-sm mt-2 font-semibold ${
                  isActive ? "text-[#333]" : "text-gray-500"
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
