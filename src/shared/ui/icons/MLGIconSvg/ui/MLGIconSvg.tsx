import clsx from "clsx";
import React, { FC } from "react";

interface IMLGIconSvg {
  svg: string;
  onClick: () => void;
  btnType: "submit" | "reset" | "button";
  wrapperClasses?: string[];
}

export const MLGIconSvg: FC<IMLGIconSvg> = ({ svg, onClick, btnType, wrapperClasses }) => {
  const wrapperClass: string = clsx("MLGIconSvg", wrapperClasses);

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={wrapperClass} onClick={onClick} type={btnType}>
      {/* default classes for svg element and its shape ->  MLGIconSvg-Pic, MLGIconSvg-Shape */}
      {/* add secondary classes right inside of svg */}
      {svg}
    </button>
  );
};
