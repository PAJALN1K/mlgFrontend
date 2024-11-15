import React, { forwardRef } from "react";
import { UserRegistrationType } from "src/entities/User";
import { MLGFormField } from "src/shared/ui/components/MLGForm";
import { RegistrationValuesChecker } from "../model/types";
import { PasswordErr } from "./errors/PasswordErr";
import { UsernameErr } from "./errors/UsernameErr";

interface IRegistrationFormFields {
  user: UserRegistrationType;
  setUser: (user: UserRegistrationType) => void;
  isValueValid: RegistrationValuesChecker;
  isValueFocused: RegistrationValuesChecker;
  setIsValueFocused: (user: RegistrationValuesChecker) => void;
}

export const RegistrationFormFields = forwardRef<HTMLInputElement, IRegistrationFormFields>(
  ({ user, setUser, isValueValid, isValueFocused, setIsValueFocused }, ref) => {
    return (
      <>
        <MLGFormField
          nameLabel="Имя пользователя"
          inputName="Username"
          inputType="text"
          ref={ref}
          isRequired
          isAutoComplete
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          isValueValid={isValueValid.username}
          setIsValueFocused={(statement) =>
            setIsValueFocused({ ...isValueFocused, username: statement })
          }
          errContent={<UsernameErr user={user} />}
        />
        <MLGFormField
          nameLabel="Почта"
          inputName="Email"
          inputType="email"
          isRequired
          isAutoComplete
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          isValueValid={isValueValid.email}
          setIsValueFocused={(statement) =>
            setIsValueFocused({ ...isValueFocused, email: statement })
          }
          errContent={<>Пожалуйста, введите корректную почту</>}
        />
        <MLGFormField
          nameLabel="Пароль"
          inputName="Password"
          inputType="password"
          isRequired
          isAutoComplete
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          isValueValid={isValueValid.password}
          setIsValueFocused={(statement) =>
            setIsValueFocused({ ...isValueFocused, password: statement })
          }
          errContent={<PasswordErr user={user} />}
        />
      </>
    );
  }
);

RegistrationFormFields.displayName = "RegistrationFormFields";
