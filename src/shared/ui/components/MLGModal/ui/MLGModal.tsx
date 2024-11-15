import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IMLGModal {
  active: boolean;
  closeModal: () => void;
  children: ReactNode;
  classes?: string[];
}

export const MLGModal: FC<IMLGModal> = ({ active, closeModal, children, classes }) => {
  const modalClass = clsx("MLGModal", classes);

  if (!active) {
    return null;
  }

  return (
    <div className={modalClass}>
      <div className="MLGModal-Content">
        <AiOutlineClose className="MLGModal-CloseIcon" onClick={closeModal} />
        {children}
      </div>
    </div>
  );
};
