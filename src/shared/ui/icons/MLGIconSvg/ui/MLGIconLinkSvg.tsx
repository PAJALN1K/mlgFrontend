import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import { useForwarding } from "src/shared/lib/hooks/useForwarding";
import { ILink } from "src/shared/lib/types";
import { renderLink } from "src/shared/lib/utils";

interface IMLGIconLinkSvg {
  svg: ReactNode;
  link: ILink;
  btnType: "submit" | "reset" | "button";
  wrapperClasses?: string[];
}

export const MLGIconLinkSvg: FC<IMLGIconLinkSvg> = ({ svg, link, btnType, wrapperClasses }) => {
  link = renderLink(link);

  const fwdToLinkCnt: () => void = useForwarding(link.linkContent);

  const wrapperClass: string = clsx("MLGIconLinkSvg", wrapperClasses);

  return link.isAnchor ? (
    <a className={wrapperClass} href={link.linkContent}>
      {/* default classes for svg element and its shape ->  MLGIconLinkSvg-Pic, MLGIconLinkSvg-Shape */}
      {/* add secondary classes right inside of svg */}
      {svg}
    </a>
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button className={wrapperClass} onClick={fwdToLinkCnt} type={btnType}>
      {/* default classes for svg element and its shape ->  MLGIconLinkSvg-Pic, MLGIconLinkSvg-Shape */}
      {/* add secondary classes right inside of svg */}
      {svg}
    </button>
  );
};
