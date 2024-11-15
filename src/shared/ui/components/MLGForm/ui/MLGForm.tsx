import clsx from "clsx";
import React, { FC, FormEvent, ReactNode } from "react";

interface IMLGForm {
  headingContent: string;
  fields: ReactNode;
  submitButton: ReactNode;
  errParagraph: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  links?: ReactNode;
  headingLevel?: number;
  classes?: string[];
  name?: string;
}

interface IFormHeading {
  headingLevel?: number;
  headingContent?: string;
}

const FormHeading: FC<IFormHeading> = ({ headingLevel, headingContent }) => {
  if (headingLevel === 1) {
    return <h1 className="MLGForm-Header">{headingContent}</h1>;
  }
  if (headingLevel === 2) {
    return <h2 className="MLGForm-Header">{headingContent}</h2>;
  }
  if (headingLevel === 3) {
    return <h3 className="MLGForm-Header">{headingContent}</h3>;
  }
  if (headingLevel === 4) {
    return <h4 className="MLGForm-Header">{headingContent}</h4>;
  }
  if (headingLevel === 5) {
    return <h5 className="MLGForm-Header">{headingContent}</h5>;
  }
  if (headingLevel === 6) {
    return <h6 className="MLGForm-Header">{headingContent}</h6>;
  }
  return <h2 className="MLGForm-Header">{headingContent}</h2>;
};

export const MLGForm: FC<IMLGForm> = ({
  headingContent,
  fields,
  submitButton,
  errParagraph,
  onSubmit,
  links,
  headingLevel,
  classes,
  name
}) => {
  const formClass = clsx("MLGForm", classes);

  return (
    <form className={formClass} name={name} onSubmit={(evt) => onSubmit(evt)}>
      <FormHeading headingLevel={headingLevel} headingContent={headingContent} />
      {errParagraph}
      <div className="MLGForm-Fields">{fields}</div>
      {submitButton}
      {links}
    </form>
  );
};
