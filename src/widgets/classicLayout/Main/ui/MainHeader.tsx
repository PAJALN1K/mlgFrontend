import React, { FC, ReactNode } from "react";

interface IMainHeader {
  children: ReactNode;
}

export const MainHeader: FC<IMainHeader> = ({ children }) => {
  return (
    <div className="MainHeader">
      <h1 className="MainHeader-Headline">{children}</h1>
    </div>
  );
};
