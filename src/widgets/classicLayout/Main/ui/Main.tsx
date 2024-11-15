import React, { FC, ReactNode } from "react";

interface IMain {
  children: ReactNode;
}

export const Main: FC<IMain> = ({ children }) => {
  return (
    <main className="Main">
      <div className="Main-Container">{children}</div>
    </main>
  );
};
