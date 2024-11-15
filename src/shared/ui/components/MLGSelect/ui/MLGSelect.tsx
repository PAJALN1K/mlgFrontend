import clsx from "clsx";
import React, { FC, FormEvent, ReactNode } from "react";

interface IMLGSelectOption {
  optnValue: string;
  children: ReactNode;
  isDefault: boolean;
}

interface IMLGSelect {
  selectId: string;
  labelTextContent: string;
  // defValTextContent: string;
  fields: IMLGSelectOption[];
  classes: string[];
  value: string;
  onChange: (evt: FormEvent<HTMLSelectElement>) => void;
}

const Option: FC<IMLGSelectOption> = ({ optnValue, children, isDefault }) => {
  return (
    <option className="MLGSelect-Optn" value={optnValue} disabled={isDefault}>
      {children}
    </option>
  );
};

export const MLGSelect: FC<IMLGSelect> = ({
  selectId,
  labelTextContent,
  fields,
  classes,
  value,
  onChange
}) => {
  const selectClass = clsx("MLGSelect", classes);

  return (
    <div className={selectClass}>
      <label className="MLGSelect-Label" htmlFor={selectId}>
        {labelTextContent}
      </label>
      <select
        value={value}
        onChange={(evt) => onChange(evt)}
        className="MLGSelect-Optns"
        id={selectId}
        name={selectId}
      >
        {fields.map(({ optnValue, children, isDefault }) => (
          <Option key={optnValue} optnValue={optnValue} isDefault={isDefault}>
            {children}
          </Option>
        ))}
      </select>
    </div>
  );
};
