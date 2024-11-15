import clsx from "clsx";
import React, { FC } from "react";
import { useForwarding } from "src/shared/lib/hooks/useForwarding";
import { ILink } from "src/shared/lib/types";
import { renderLink } from "src/shared/lib/utils";

interface IMLGIconLinkImg {
  iconSrc: string;
  link: ILink;
  btnType: "submit" | "reset" | "button";
  iconAlt?: string;
  wrapperClasses?: string[];
  iconClasses?: string[];
}

export const MLGIconLinkImg: FC<IMLGIconLinkImg> = ({
  iconSrc,
  link,
  btnType,
  iconAlt,
  wrapperClasses,
  iconClasses
}) => {
  link = renderLink(link);

  const fwdToLinkCnt: () => void = useForwarding(link.linkContent);

  const wrapperClass: string = clsx("MLGIconLinkImg", wrapperClasses);
  const iconClass: string = clsx("MLGIconLinkImg-Pic", iconClasses);

  return link.isAnchor ? (
    <a className={wrapperClass} href={link.linkContent}>
      <img className={iconClass} src={iconSrc} alt={iconAlt} />
    </a>
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button className={wrapperClass} onClick={fwdToLinkCnt} type={btnType}>
      <img className={iconClass} src={iconSrc} alt={iconAlt} />
    </button>
  );
};
