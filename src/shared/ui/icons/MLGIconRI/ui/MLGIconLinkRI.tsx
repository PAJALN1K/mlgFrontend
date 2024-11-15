import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import { useForwarding } from "src/shared/lib/hooks/useForwarding";
import { ILink } from "src/shared/lib/types";
import { renderLink } from "src/shared/lib/utils";

interface IMLGIconLinkRI {
  icon: ReactNode;
  link: ILink;
  btnType: "submit" | "reset" | "button";
  // iconClasses?: string[];
  wrapperClasses?: string[];
}

export const MLGIconLinkRI: FC<IMLGIconLinkRI> = ({
  icon,
  link,
  btnType,
  // iconClasses,
  wrapperClasses
}) => {
  link = renderLink(link);

  const fwdToLinkCnt: () => void = useForwarding(link.linkContent);

  const wrapperClass: string = clsx("MLGIconLinkRI", wrapperClasses);
  // const iconClass: string = clsx("MLGIconLinkRI-Pic", iconClasses);

  return link.isAnchor ? (
    <a className={wrapperClass} href={link.linkContent}>
      {icon}
    </a>
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button className={wrapperClass} onClick={fwdToLinkCnt} type={btnType}>
      {icon}
    </button>
  );
};
