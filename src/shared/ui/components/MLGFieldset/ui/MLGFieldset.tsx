import clsx from "clsx";
import React, { ChangeEvent, FC, ReactNode } from "react";

interface IMLGFieldsetInput {
  children: ReactNode;
  inpValue: string;
  inputType: string;
  inputName: string;
}

interface IMLGFieldset {
  legend: string;
  fields: IMLGFieldsetInput[];
  onChange: (handler: string) => string;
  value: string;
  inputName: string;
  fieldsetClasses?: string[];
}

const Input: FC<IMLGFieldsetInput> = ({ children, inpValue, inputType, inputName }) => {
  return (
    <label htmlFor={inputName}>
      <input
        id={inputName}
        className="MLGFieldset-Input"
        type={inputType}
        name={inputName}
        value={inpValue}
      />
      <span className="MLGFieldset-Label">{children}</span>
    </label>
  );
};

export const MLGFieldset: FC<IMLGFieldset> = ({
  legend,
  fields,
  onChange,
  value,
  inputName,
  fieldsetClasses
}) => {
  const fieldsetClass: string = clsx("MLGFieldset", fieldsetClasses);
  return (
    <form className={fieldsetClass}>
      <fieldset
        defaultValue={value}
        onChange={(evt: ChangeEvent<HTMLFieldSetElement>) =>
          evt.currentTarget.textContent !== null ? onChange(evt.currentTarget.textContent) : value
        }
        className="MLGFieldset-Btns"
      >
        <legend className="MLGFieldset-Legend">{legend}</legend>
        {fields.map(({ inpValue, inputType, children }) => (
          <Input key={inpValue} inpValue={inpValue} inputType={inputType} inputName={inputName}>
            {children}
          </Input>
        ))}
      </fieldset>
    </form>
  );
};
