"use client";
import { createContext, useState, type ReactNode } from "react";
import ModalTemplate from "@/components/molecules/ModalTemplate";
interface ModalContextType {
  openModal: (
    title: string,
    content: ReactNode,
    onCloseCallback?: () => void,
    widht?: string
  ) => void;

  closeModal: () => void;

  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [onCloseCallback, setOnCloseCallback] = useState<(() => void) | null>(
    null
  );
  const [modalWidth, setModalWidth] = useState<string>("max-w-[500px]");
  const [title, setTitle] = useState<string>("");

  const openModal = (
    modalTitle: string,
    modalContent: ReactNode,
    callback?: () => void,
    width: string = "max-w-[500px]"
  ) => {
    setTitle(modalTitle);
    setContent(modalContent);
    setOnCloseCallback(() => callback ?? null);
    setModalWidth(width);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
    setTitle("");
    if (onCloseCallback) {
      onCloseCallback();
      setOnCloseCallback(null);
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, setIsOpen, isOpen }}>
      {children}

      {isOpen && (
        <>
          <ModalTemplate title={title} onClose={closeModal} width={modalWidth}>
            {content}
          </ModalTemplate>
        </>
      )}
    </ModalContext.Provider>
  );
};
