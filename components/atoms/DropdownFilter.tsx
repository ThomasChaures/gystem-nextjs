"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownFilterProps {
  label?: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function DropdownFilter({
  label,
  options,
  selected,
  onChange,
}: DropdownFilterProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // cerrar cuando clickeas fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      {label && <span className="text-sm font-medium mr-2">{label}:</span>}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between border px-4 py-2 rounded-xl w-48 bg-white text-gray-700 hover:bg-gray-50 transition"
      >
        {selected}
        <ChevronDown
          className={`ml-2 h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul className="absolute mt-1 w-48 bg-white border rounded-xl shadow-lg z-10 overflow-hidden">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                option === selected ? "bg-gray-200 font-medium" : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
