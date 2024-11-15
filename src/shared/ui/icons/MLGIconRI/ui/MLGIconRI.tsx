import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface IMLGIconRI {
  icon: ReactNode;
  onClick: () => void;
  btnType: "submit" | "reset" | "button";
  wrapperClasses?: string[];
}

export const MLGIconRI: FC<IMLGIconRI> = ({ icon, onClick, btnType, wrapperClasses }) => {
  const wrapperClass: string = clsx("MLGIconRI", wrapperClasses);
  // const iconClass: string = clsx("MLGIconRI-Pic", iconClasses);

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={wrapperClass} onClick={onClick} type={btnType}>
      {icon}
    </button>
  );
};
