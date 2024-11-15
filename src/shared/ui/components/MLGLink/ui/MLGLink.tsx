import clsx from "clsx";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ILinkedNode } from "src/shared/lib/types";
import { isDefault } from "src/shared/lib/utils";

export const MLGLink: FC<ILinkedNode> = ({ children, link, classes }) => {
  if (link.isAnchor === undefined) {
    link = { linkContent: link.linkContent, isAnchor: false };
  }

  const linkClass = clsx("MLGLink", classes, {
    MLGLink_default: isDefault(classes)
  });

  return link.isAnchor ? (
    <a className={linkClass} href={link.linkContent}>
      {children}
    </a>
  ) : (
    <Link className={linkClass} to={link.linkContent}>
      {children}
    </Link>
  );
};
