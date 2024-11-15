import clsx from "clsx";
import React, { FC, useEffect, useRef, useState } from "react";
import { UserRegistrationType } from "src/entities/User";
import { MLGButton } from "src/shared/ui/components/MLGButton";
import { MLGForm, MLGFormErrParagraph } from "src/shared/ui/components/MLGForm";
import { handleRegistrationSubmit } from "../api/handleRegistrationSubmit";
import { useInputsRender } from "../lib/hooks/useInputsRender";
import { RegistrationValuesChecker } from "../model/types";
import { RegistrationFormFields } from "./RegistrationFormFields";

interface IRegistrationForm {
  setIsSuccess: (stmnt: boolean) => void;
  classes?: string[];
  buttonClasses?: string[];
}

export const RegistrationForm: FC<IRegistrationForm> = ({
  setIsSuccess,
  classes,
  buttonClasses
}) => {
  const usernameRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<UserRegistrationType>({
    username: "",
    email: "",
    password: ""
    // matchPassword: "",
  });

  // const [user, setUser] = useState<IRegistrationUser>({
  //   username: "dvory",
  //   email: "dvorjan4ikDaBest@mail.ru",
  //   password: "dvor1234",
  //   // matchPassword: "",
  // });

  const [isValueValid, setIsValueValid] = useState<RegistrationValuesChecker>({
    username: true,
    email: true,
    password: true
    // matchPassword: true,
  });

  const [isValueFocused, setIsValueFocused] = useState<RegistrationValuesChecker>({
    username: false,
    email: false,
    password: false
    // matchPassword: true,
  });

  const [errMsg, setErrMsg] = useState<string>("");

  useInputsRender(user, isValueValid, setIsValueValid);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  return (
    <MLGForm
      headingContent="Регистрация"
      headingLevel={1}
      classes={["MLGForm_registration", clsx(classes)]}
      name="MLGForm_registration"
      onSubmit={(evt) => handleRegistrationSubmit(evt, user, setUser, setErrMsg, setIsSuccess)}
      errParagraph={<MLGFormErrParagraph errMsg={errMsg} />}
      fields={
        <RegistrationFormFields
          user={user}
          setUser={setUser}
          isValueValid={isValueValid}
          isValueFocused={isValueFocused}
          setIsValueFocused={setIsValueFocused}
          ref={usernameRef}
        />
      }
      submitButton={
        <MLGButton
          onClick={() => {}}
          btnType="submit"
          classes={["MLGForm-Button", clsx(buttonClasses), ""]}
          isDisabled={
            !isValueValid.username ||
            !isValueValid.email ||
            !isValueValid.password ||
            user.username === "" ||
            user.email === "" ||
            user.password === ""
          }
        >
          Зарегистрироваться
        </MLGButton>
      }
    />
  );
};
