import { ILink } from "../types";

export function renderLink(link: ILink): ILink {
  if (link.isAnchor === undefined) {
    link = {
      linkContent: link.linkContent,
      isAnchor: false,
      isSelected: false
    };
  }
  return link;
}
