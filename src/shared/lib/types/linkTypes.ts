import { ReactNode } from "react";

export interface ILink {
  linkContent: string;
  isAnchor?: boolean;
  isSelected?: boolean;
}

export interface ILinkWidget {
  linkContent: string;
  isSelected: boolean;
  isAnchor?: boolean;
}

export interface ILinkedNode {
  children: ReactNode;
  link: ILink;
  classes?: string[];
}
