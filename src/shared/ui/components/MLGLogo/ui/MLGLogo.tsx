import clsx from "clsx";
import React, { FC } from "react";
import { ReactComponent as LogoImg } from "src/shared/assets/images/ui/logo.svg";
import { ILink } from "src/shared/lib/types";

interface IMLGLogo {
  link?: ILink;
  classes?: string[];
  imgClasses?: string[];
}

export const MLGLogo: FC<IMLGLogo> = ({ link, classes, imgClasses }) => {
  const defaultClass = clsx("MLGLogo", "MLGLogo_default", classes);
  const anchorClass = clsx("MLGLogo", "MLGLogo_anchor", classes);
  const imgClass = clsx("MLGLogo-Img", imgClasses);

  return link ? (
    <a className={anchorClass} href={link.linkContent}>
      <LogoImg className={imgClass} />
    </a>
  ) : (
    <div className={defaultClass}>
      <LogoImg className={imgClass} />
    </div>
  );
};
