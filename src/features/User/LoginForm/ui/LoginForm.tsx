import clsx from "clsx";
import React, { FC, useEffect, useRef, useState } from "react";
import { userLogin, UserLoginType } from "src/entities/User";
import { useAppDispatch } from "src/shared/lib/store";
import { MLGButton } from "src/shared/ui/components/MLGButton";
import { MLGForm, MLGFormErrParagraph } from "src/shared/ui/components/MLGForm";
import { handleLoginSubmit } from "../api/handleLoginSubmit";
import { ILoginUserValuesChecker } from "../model/types";
import { LoginFormFields } from "./LoginFormFields";

interface ILoginForm {
  classes?: string[];
  buttonClasses?: string[];
}

export const LoginForm: FC<ILoginForm> = ({ classes, buttonClasses }) => {
  const usernameRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<UserLoginType>({
    username: "",
    password: ""
  });

  const [isValueFocused, setIsValueFocused] = useState<ILoginUserValuesChecker>({
    username: false,
    password: false
  });

  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const dispatch = useAppDispatch();

  return (
    <MLGForm
      headingContent="Вход в аккаунт"
      headingLevel={1}
      classes={["MLGForm_login", clsx(classes)]}
      onSubmit={(evt) => handleLoginSubmit(evt, () => dispatch(userLogin(user)), setErrMsg)}
      errParagraph={<MLGFormErrParagraph errMsg={errMsg} />}
      fields={
        <LoginFormFields
          user={user}
          setUser={setUser}
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
        >
          Войти
        </MLGButton>
      }
    />
  );
};
