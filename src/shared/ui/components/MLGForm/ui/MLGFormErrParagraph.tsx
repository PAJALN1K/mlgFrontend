import React, { FC, ReactNode } from "react";

interface IMLGFormErrParagraph {
  errMsg: ReactNode;
}

export const MLGFormErrParagraph: FC<IMLGFormErrParagraph> = ({ errMsg }) => {
  return (
    <p className={errMsg ? "MLGForm-ErrorMsg" : "Hidden"} aria-live="assertive">
      {errMsg}
    </p>
  );
};
