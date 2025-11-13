import React, { useState } from "react";

interface SparklineChartProps {
  data: number[];
  labels?: string[]; // días / fechas opcionales
  width: number;
  height: number;
}

const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  labels,
  width,
  height,
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const min = Math.min(...data);
  const max = Math.max(...data);

  const scaleX = (i: number) => (i / (data.length - 1)) * width;
  const scaleY = (v: number) =>
    height - ((v - min) / (max - min)) * height;

  const pathD = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)},${scaleY(v)}`)
    .join(" ");

  const areaD = `${pathD} L ${width},${height} L 0,${height} Z`;

  return (
    <div className="relative" style={{ width }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Área */}
        <path d={areaD} fill="url(#sparklineGradient)" />

        {/* Línea */}
        <path
          d={pathD}
          fill="none"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Rectángulo debajo del punto */}
        {hoverIndex !== null && (
          <rect
            x={scaleX(hoverIndex) - 20}
            y={scaleY(data[hoverIndex])}
            width={40}
            height={height - scaleY(data[hoverIndex])}
            fill="#6366f1"
            opacity={0.15}
          />
        )}

        {/* Línea punteada */}
        {hoverIndex !== null && (
          <line
            x1={scaleX(hoverIndex)}
            y1={0}
            x2={scaleX(hoverIndex)}
            y2={scaleY(data[hoverIndex])}
            stroke="#6366f1"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        )}

        {/* Puntos */}
        {data.map((v, i) => (
          <circle
            key={i}
            cx={scaleX(i)}
            cy={scaleY(v)}
            r={hoverIndex === i ? 5 : 3}
            fill="#6366f1"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        ))}
      </svg>

      {/* Tooltip tipo Stripe */}
      {hoverIndex !== null && (
        <div
          className="
            absolute text-white text-xs font-medium
            bg-black px-3 py-2 rounded-md shadow-lg
            transform -translate-x-1/2
          "
          style={{
            left: scaleX(hoverIndex),
            top: scaleY(data[hoverIndex]) - 45,
          }}
        >
          <div className="text-sm font-semibold">${data[hoverIndex]}</div>
          <div className="opacity-60 text-[10px]">
            {labels ? labels[hoverIndex] : `Día ${hoverIndex + 1}`}
          </div>
        </div>
      )}
    </div>
  );
};

export default SparklineChart;
