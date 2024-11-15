import clsx from "clsx";
import React, { FC } from "react";

interface IMLGLoader {
  classes?: string[];
}

export const MLGLoader: FC<IMLGLoader> = ({ classes }) => {
  return <div className={clsx("MLGLoader", classes)} />;
};
