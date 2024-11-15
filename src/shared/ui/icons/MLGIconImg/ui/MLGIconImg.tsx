import clsx from "clsx";
import React, { FC } from "react";

interface IMLGIconImg {
  iconSrc: string;
  onClick: () => void;
  btnType: "submit" | "reset" | "button";
  iconAlt?: string;
  wrapperClasses?: string[];
  iconClasses?: string[];
}

export const MLGIconImg: FC<IMLGIconImg> = ({
  iconSrc,
  onClick,
  btnType,
  iconAlt,
  wrapperClasses,
  iconClasses
}) => {
  const wrapperClass: string = clsx("MLGIconImg", wrapperClasses);
  const iconClass: string = clsx("MLGIconImg-Pic", iconClasses);

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={wrapperClass} onClick={onClick} type={btnType}>
      <img className={iconClass} src={iconSrc} alt={iconAlt} />
    </button>
  );
};
