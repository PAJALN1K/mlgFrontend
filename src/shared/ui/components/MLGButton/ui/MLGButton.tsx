import clsx from "clsx";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { isDefault } from "src/shared/lib/utils";

interface IMLGButton {
  children: ReactNode;
  btnType: "submit" | "reset" | "button";
  onClick?: (...any: any[]) => void;
  isDisabled?: boolean;
  classes?: string[];
}

export const MLGButton: FC<IMLGButton> = ({
  children,
  onClick,
  btnType,
  isDisabled = false,
  classes
}) => {
  const [disabled, setDisabled] = useState<boolean>(isDisabled);

  const buttonClass = clsx("MLGButton", classes, {
    MLGButton_default: isDefault(classes)
  });

  useEffect(() => {
    setDisabled(isDisabled);
  }, [isDisabled]);

  if (onClick) {
    // eslint-disable-next-line react/button-has-type
    return (
      <button
        className={buttonClass}
        type={btnType}
        onClick={(evt) => onClick(evt)}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={buttonClass} type={btnType} disabled={disabled}>
      {children}
    </button>
  );
};
