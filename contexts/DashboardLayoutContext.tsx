"use client";

import React, {
  createContext,
  type ReactNode,
  useEffect,
  useState,
} from "react";

interface LayoutContextType {
  handleLayout: (val: boolean) => void;
  openLayout: boolean;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [openLayout, setOpenLayout] = useState<boolean>(true);

  useEffect(() => {
    const layoutLocal = localStorage.getItem("layout");

    if (layoutLocal) {
      setOpenLayout(JSON.parse(layoutLocal));
    }
  }, []);

  const handleLayout = (bool: boolean) => {
    setOpenLayout(bool);
    localStorage.setItem("layout", JSON.stringify(bool));
  };

  return (
    <LayoutContext.Provider
      value={{
        openLayout,
        handleLayout,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
