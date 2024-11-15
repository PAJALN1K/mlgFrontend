import clsx from "clsx";
import React, { FC } from "react";

interface IMLGSearch {
  classes?: string[];
}

export const MLGSearch: FC<IMLGSearch> = ({ classes }) => {
  const searchClass = clsx("MLGSearch", classes);

  return (
    <div className={searchClass}>
      <form className="MLGSearch-Form" autoComplete="off">
        <input className="MLGSearch-Input" type="text" name="text" placeholder="Поиск..." />
        <i className="MLGSearch-Icon fa-solid fa-magnifying-glass" />
      </form>
    </div>
  );
};
