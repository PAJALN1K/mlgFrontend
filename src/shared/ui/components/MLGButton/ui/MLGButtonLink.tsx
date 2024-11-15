import clsx from "clsx";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { useForwarding } from "src/shared/lib/hooks/useForwarding";
import { ILink } from "src/shared/lib/types";
import { isDefault, renderLink } from "src/shared/lib/utils";

interface IMLGButtonLink {
  children: ReactNode;
  link: ILink;
  btnType: "submit" | "reset" | "button";
  isDisabled?: boolean;
  classes?: string[];
}

export const MLGButtonLink: FC<IMLGButtonLink> = ({
  children,
  link,
  btnType,
  isDisabled = false,
  classes
}) => {
  link = renderLink(link);

  const [disabled, setDisabled] = useState<boolean>(isDisabled);
  const fwdToLinkCnt: () => void = useForwarding(link.linkContent);

  const buttonClass = clsx("MLGButtonLink", classes, {
    MLGButtonLink_default: isDefault(classes)
  });

  useEffect(() => {
    setDisabled(isDisabled);
  }, [isDisabled]);

  return link.isAnchor ? (
    <a className={buttonClass} href={link.linkContent}>
      {children}
    </a>
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button className={buttonClass} onClick={fwdToLinkCnt} type={btnType} disabled={disabled}>
      {children}
    </button>
  );
};
