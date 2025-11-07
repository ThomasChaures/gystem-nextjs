import React from "react";

interface SparklineChartProps {
  data: number[];
  width?: number;
  height?: number;
}

const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  width = 200,
  height = 60,
}) => {
  if (!data || data.length < 2) return null;

  const first = data[0];
  const last = data[data.length - 1];
  const percentage = (((last - first) / first) * 100).toFixed(1);
  const isPositive = Number(percentage) >= 0;

  const min = Math.min(...data);
  const max = Math.max(...data);

  const scaleX = (i: number) => (i / (data.length - 1)) * width;
  const scaleY = (v: number) => height - ((v - min) / (max - min)) * height;

  const pathD = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)},${scaleY(v)}`)
    .join(" ");

  // Path para el relleno: misma línea pero cerrada al fondo
  const areaD = `${pathD} L ${width},${height} L 0,${height} Z`;

  return (
    <div className="flex flex-col items-end">
      <div
        className={`text-sm px-2 mb-8 py-1 rounded-md font-medium ${
          isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {isPositive ? "+" : ""}
        {percentage}%
      </div>

      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Gradiente para relleno */}
        <defs>
          <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor={isPositive ? "#fbbf24" : "#fbbf24"}
              stopOpacity="0.25"
            />
            <stop
              offset="100%"
              stopColor={isPositive ? "#fbbf24" : "#fbbf24"}
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* Relleno */}
        <path d={areaD} fill="url(#sparkline-gradient)" />

        {/* Línea principal */}
        <path
          d={pathD}
          fill="none"
          stroke={isPositive ? "#fbbf24" : "#fbbf24"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default SparklineChart;
