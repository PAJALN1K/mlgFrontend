import React, { forwardRef } from "react";
import { UserLoginType } from "src/entities/User";
import { MLGFormField } from "src/shared/ui/components/MLGForm";
import { ILoginUserValuesChecker } from "../model/types";

interface ILoginFormFields {
  user: UserLoginType;
  setUser: (user: UserLoginType) => void;
  isValueFocused: ILoginUserValuesChecker;
  setIsValueFocused: (statement: ILoginUserValuesChecker) => void;
}

export const LoginFormFields = forwardRef<HTMLInputElement, ILoginFormFields>(
  ({ user, setUser, isValueFocused, setIsValueFocused }, ref) => {
    return (
      <>
        <MLGFormField
          nameLabel="Имя пользователя"
          inputName="username"
          inputType="text"
          ref={ref}
          isRequired
          isAutoComplete={false}
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          setIsValueFocused={(statement) => {
            setIsValueFocused({ ...isValueFocused, username: statement });
          }}
        />
        <MLGFormField
          nameLabel="Пароль"
          inputName="password"
          inputType="password"
          isRequired
          isAutoComplete={false}
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          setIsValueFocused={(statement) => {
            setIsValueFocused({ ...isValueFocused, username: statement });
          }}
        />
      </>
    );
  }
);

LoginFormFields.displayName = "LoginFormFields";
