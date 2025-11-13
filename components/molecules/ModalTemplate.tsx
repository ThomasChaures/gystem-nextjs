"use client";
import React, { type ReactNode } from "react";
import { X } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useModal } from "@/hooks/useModal";

interface props {
  title: string;
  children: ReactNode;
  onClose: () => void;
  width?: string;
}

const ModalTemplate: React.FC<props> = ({
  title,
  children,
  onClose,
  width = "max-w-[500px]",
}) => {
  const [show, setShow] = useState<boolean>(false);
  const { closeModal } = useModal();
  const ref = useClickOutside(() => closeModal())
  useEffect(() => {
    setShow(true);
    
  }, []);
  return (
    <>
      <Transition
        as={Fragment}
        show={show}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-y-3"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-3"
      >
        <div  className="bg-black/10 flex items-center z-50 justify-center w-full h-screen fixed top-0 left-0">
          <div ref={ref} className={`bg-white ${width} min-w-[320px] w-full rounded-2xl p-5`}>
            <div
              onClick={onClose}
              className="w-full flex items-center justify-between"
            >
              <p className="inter-semibold text-xl">{title}</p>
              <X className="cursor-pointer" strokeWidth={1.5} size={22} />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default ModalTemplate;
