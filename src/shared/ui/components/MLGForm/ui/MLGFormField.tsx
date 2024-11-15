import clsx from "clsx";
import React, { forwardRef, ReactNode, Ref } from "react";

interface IMLGFormField {
  nameLabel: string;
  value: string;
  onChange: (...any: any[]) => void;
  isRequired: boolean;
  inputName?: string;
  inputType?: string;
  isAutoComplete?: boolean;
  isValueValid?: boolean;
  setIsValueFocused: (statement: boolean) => void;
  errContent?: ReactNode;
}

export const MLGFormField = forwardRef<HTMLInputElement, IMLGFormField>(
  (
    {
      nameLabel,
      value,
      onChange,
      isRequired,
      inputName,
      inputType,
      isAutoComplete = false,
      isValueValid = true,
      setIsValueFocused,
      errContent
    },
    ref?: Ref<HTMLInputElement>
  ) => {
    const inputClass = clsx(
      "MLGForm-Input",
      !isValueValid ? "MLGForm-Input_invalid" : "MLGForm-Input_valid"
    );

    return (
      <div className="MLGForm-Field">
        <input
          className={inputClass}
          id={`MLGForm-${inputName}`}
          value={value}
          onChange={onChange}
          required={isRequired}
          name={inputName}
          type={inputType}
          autoComplete={isAutoComplete ? "on" : "off"}
          aria-invalid={isValueValid ? "false" : "true"}
          onFocus={() => setIsValueFocused(true)}
          onBlur={() => setIsValueFocused(false)}
          placeholder=" "
          ref={ref}
        />
        <label className="MLGForm-NameLabel" htmlFor={`MLGForm-${inputName}`}>
          {nameLabel}
        </label>
        <p className="MLGForm-Instructions">{!isValueValid ? errContent : ""}</p>
      </div>
    );
  }
);

MLGFormField.displayName = "MLGFormField";
