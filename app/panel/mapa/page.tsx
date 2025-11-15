"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/atoms/Card";

import { useModal } from "@/hooks/useModal";

import { IconCube } from "@tabler/icons-react";
import { CircleDashed, Dumbbell } from "lucide-react";

interface GymArea {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  children: GymObject[];
}

interface GymObject {
  id: number;
  type: "zone" | "machine" | "bench" | "custom";
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  icon?: string;
  color?: string;
}

const Page = () => {
  const { openModal, closeModal } = useModal();
  const [mode, setMode] = useState<"idle" | "drawingGym" | "placingObject">(
    "drawingGym"
  );

  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null
  );
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [objectPos, setObjectPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleSaveZone = (
    name: string,
    color: string,
    width: number,
    height: number,
    x: number,
    y: number
  ) => {
    if (gym) {
      if (pendingObject) {
        setGym((prev) =>
          prev
            ? {
                ...prev,
                children: [
                  ...prev.children,
                  {
                    id: Date.now(),
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    label: name,
                    color: color,
                    type: pendingObject.type,
                    icon: pendingObject.icon,
                  },
                ],
              }
            : prev
        );
      }
    }

    closeModal();
  };

  const handleConfirmZoneModal = (
    x: number,
    y: number,
    width: number,
    height: number
  ) => {
    const ZoneForm = () => {
      const [zoneName, setZoneName] = useState("");
      const [zoneColor, setZoneColor] = useState("blue-400");

      return (
        <div className="flex flex-col gap-4 pt-10 min-w-[300px]">
          {/* Nombre */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Nombre de la zona</label>
            <input
              type="text"
              value={zoneName}
              onChange={(e) => setZoneName(e.target.value)}
              placeholder="Ej: Cardio, Piernas..."
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Colores */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Color</label>
            <div className="grid grid-cols-6 gap-2">
              {[
                "bg-red-400",
                "bg-orange-400",
                "bg-yellow-400",
                "bg-green-400",
                "bg-teal-400",
                "bg-blue-400",
                "bg-indigo-400",
                "bg-purple-400",
                "bg-pink-400",
                "bg-rose-400",
                "bg-gray-400",
                "bg-white",
              ].map((color) => (
                <div
                  key={color}
                  onClick={() => setZoneColor(color)}
                  className={`
                  w-8 h-8 rounded-md cursor-pointer border 
                  hover:scale-110 transition
                  ${color}
                  ${zoneColor === color ? "ring-2 ring-black" : ""}
                `}
                />
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="flex items-center gap-3 mt-1">
            <div className={`w-10 h-10 border rounded-md ${zoneColor}`} />
            <span className="text-sm">Color seleccionado</span>
          </div>

          {/* Botón */}
          <button
            onClick={() => {
              if (zoneName) {
                handleSaveZone(zoneName, zoneColor, width, height, x, y);
                closeModal();
              }
              return;
            }}
            className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
          >
            Guardar zona
          </button>
        </div>
      );
    };

    openModal("Confirmar zona", <ZoneForm />);
  };

  const [gym, setGym] = useState<GymArea | undefined>(undefined);
  const [pendingObject, setPendingObject] = useState<Omit<
    GymObject,
    "id" | "x" | "y"
  > | null>(null);

  const [isCreated, setIsCreated] = useState<boolean>(false);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isDrawingZone, setIsDrawingZone] = useState<boolean>(false);

  useEffect(() => {
    if (gym && gym.width !== 0) {
      setIsCreated(true);
    }
  }, [gym]);

  const handleObject = () => {
    setMode("placingObject");
    setPendingObject({
      type: "machine",
      width: 40,
      height: 40,
      icon: "dumbell",
      label: "Maquina",
    });
  };
  const handleZone = () => {
    setMode("placingObject");
    setPendingObject({
      type: "zone",
      width: 0,
      height: 0,
      label: "Zona",
    });
  };

  const getRelativePos = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const { x, y } = getRelativePos(e);

    if (
      mode === "placingObject" &&
      pendingObject &&
      pendingObject.type !== "zone" &&
      gym
    ) {
      const insideX = x - gym.x;
      const insideY = y - gym.y;
      setMousePos({ x, y });

      if (
        insideX >= 0 &&
        insideX <= gym.width &&
        insideY >= 0 &&
        insideY <= gym.height &&
        mousePos
      ) {
        setObjectPos({
          x: insideX - pendingObject.width / 2,
          y: insideY - pendingObject.height / 2,
        });
        setGym((prev) =>
          prev
            ? {
                ...prev,
                children: [
                  ...prev.children,
                  {
                    id: Date.now(),
                    x: insideX - pendingObject.width / 2,
                    y: insideY - pendingObject.height / 2,
                    width: pendingObject.width,
                    height: pendingObject.height,
                    label: pendingObject.label,
                    type: pendingObject.type,
                    icon: pendingObject.icon,
                  },
                ],
              }
            : prev
        );
        setMode("idle");
        setMousePos(null);
        setPendingObject(null);
        return;
      }
    }

    if (
      mode === "placingObject" &&
      pendingObject &&
      pendingObject.type === "zone" &&
      gym
    ) {
      setStartPoint({ x, y });
      setMousePos({ x, y });
      setIsDrawingZone(true);
    }

    if (mode !== "drawingGym") return;

    setStartPoint({ x, y });
    setMousePos({ x, y });
    setIsDrawing(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { x, y } = getRelativePos(e);
    console.log(x, y);
    if (mode === "placingObject" && pendingObject && gym) {
      const insideX = x - gym.x;
      const insideY = y - gym.y;

      setMousePos({ x, y });

      setObjectPos({
        x: insideX - pendingObject?.width / 2,
        y: insideY - pendingObject?.height / 2,
      });

      return;
    }

    if (mode === "placingObject" && pendingObject?.type === "zone") {
      if (!isDrawingZone || !startPoint) return;

      setMousePos({
        x: x,
        y: y,
      });
      return;
    }
    if (mode !== "drawingGym") return;
    if (!isDrawing || !startPoint) return;

    setMousePos({
      x: x,
      y: y,
    });
  };

  const handleMouseUp = () => {
    if (!startPoint || mousePos === null) return;
    if (mode === "placingObject" && pendingObject?.type === "zone" && gym) {
      const x = Math.min(startPoint.x, mousePos.x);
      const y = Math.min(startPoint.y, mousePos.y);

      const width = Math.abs(mousePos.x - startPoint.x);
      const height = Math.abs(mousePos.y - startPoint.y);

      const xZ = x - gym.x;
      const yZ = y - gym.y;

      handleConfirmZoneModal(xZ, yZ, width, height);

      setIsDrawingZone(false);
      setMode("idle");
      setMousePos(null);
      setPendingObject(null);
      setStartPoint(null);
      return;
    }

    if (mode !== "drawingGym") return;

    const x = Math.min(startPoint.x, mousePos.x);
    const y = Math.min(startPoint.y, mousePos.y);

    const width = Math.abs(mousePos.x - startPoint.x);
    const height = Math.abs(mousePos.y - startPoint.y);

    setGym({
      id: Date.now(),
      x,
      y,
      width,
      height,
      children: [] as GymObject[],
    });

    setIsDrawing(false);
    setStartPoint(null);
    setMousePos(null);
    setMode("idle");
  };

  return (
    <section className="relative">
      <Card className="p-1! border border-[#d1d1d1]">
        <div className="relative h-[80vh] w-full bg-white">
          <div
            ref={containerRef}
            className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {isDrawing && startPoint && mousePos && mode === "drawingGym" && (
              <div
                className="absolute bg-black/10 border border-black/50 rounded-md pointer-events-none"
                style={{
                  left: Math.min(startPoint.x, mousePos.x),
                  top: Math.min(startPoint.y, mousePos.y),
                  width: Math.abs(mousePos.x - startPoint.x),
                  height: Math.abs(mousePos.y - startPoint.y),
                }}
              ></div>
            )}

            {isCreated && gym && (
              <div
                className=" bg-black/20 border border-black/50 rounded-md relative"
                style={{
                  left: gym.x,
                  top: gym.y,
                  width: gym.width,
                  height: gym.height,
                }}
              >
                {gym.children.map((obj) => (
                  <div
                    key={obj.id}
                    className={`absolute ${
                      obj.type === "zone" ? `${obj.color}` : "bg-white"
                    } border shadow rounded-md flex flex-col items-center justify-center gap-1`}
                    style={{
                      left: obj.x,
                      top: obj.y,
                      width: obj.width,
                      height: obj.height,
                    }}
                  >
                    {obj.icon === "cube" && <IconCube size={18} />}
                    {obj.icon === "dumbbell" && (
                      <span>
                        <Dumbbell fill="black" />
                      </span>
                    )}
                    {obj.icon === "general" && (
                      <span>
                        <CircleDashed />
                      </span>
                    )}
                    <span className="text-[10px]">{obj.label}</span>
                  </div>
                ))}
                {mousePos &&
                  pendingObject &&
                  mode === "placingObject" &&
                  pendingObject.type !== "zone" && (
                    <div
                      className="absolute bg-white border shadow rounded-md flex flex-col items-center justify-center gap-1"
                      style={{
                        left: objectPos?.x,
                        top: objectPos?.y,
                        width: pendingObject?.width,
                        height: pendingObject?.height,
                      }}
                    >
                      <span className="text-[10px] cursor-grab">
                        {pendingObject?.label}
                      </span>
                    </div>
                  )}

                {isDrawingZone && startPoint && mousePos && (
                  <div
                    className="absolute bg-orange-400 border border-black/50 rounded-md pointer-events-none"
                    style={{
                      left: Math.min(startPoint.x, mousePos.x) - gym.x,
                      top: Math.min(startPoint.y, mousePos.y) - gym.y,
                      width: Math.abs(mousePos.x - startPoint.x),
                      height: Math.abs(mousePos.y - startPoint.y),
                    }}
                  ></div>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>

      <Card className="absolute w-auto! left-1/2 -translate-x-1/2 p-2! transform border bottom-5">
        <ul className="flex items-center gap-x-3">
          <li onClick={handleZone} className={`hover:bg-gray-300/50 ${pendingObject?.type === 'zone' && "bg-gray-300/50"}  p-2 rounded-lg`}>
            <IconCube />
          </li>
          <li onClick={handleObject} className={`hover:bg-gray-300/50 ${pendingObject?.type === 'machine' && "bg-gray-300/50"}  p-2 rounded-lg`}>
            <Dumbbell fill="black" />
          </li>
          <li onClick={handleObject} className="hover:bg-gray-300/50 p-2 rounded-lg">
            <CircleDashed fill="black" />
          </li>
        </ul>
      </Card>
    </section>
  );
};

export default Page;
