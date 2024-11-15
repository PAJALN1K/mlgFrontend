import React, { FC, MouseEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { USER_LOCALSTORAGE_CONFIRMATION_CODE } from "src/shared/config";
import { HOME_URL, LOGIN_URL } from "src/shared/config/URLs";
import { MLGButton } from "src/shared/ui/components/MLGButton";
import { MLGLink } from "src/shared/ui/components/MLGLink";
import { MLGLogo } from "src/shared/ui/components/MLGLogo";
import { validateCode } from "../api/validateCode";

interface IRegistrationConfirmation {
  setIsSuccess: (stmnt: boolean) => void;
}

interface IInputCodeError {
  value: string;
}

const InputCodeError: FC<IInputCodeError> = ({ value }) => {
  return <span className="RegistrationConfirmation-UserError">{value}</span>;
};

export const RegistrationConfirmation: FC<IRegistrationConfirmation> = ({ setIsSuccess }) => {
  const [codePassed, setCodePassed] = useState(false);
  const emailCode: string | null = localStorage.getItem(USER_LOCALSTORAGE_CONFIRMATION_CODE);
  const [inputCode, setInputCode] = useState<string>("");
  const [inputCodeError, setInputCodeError] = useState<string>("");

  if (emailCode === null && !codePassed) {
    return (
      <section className="RegistrationConfirmation">
        <div className="RegistrationConfirmation-Wrapper">
          <MLGLogo
            link={{ linkContent: HOME_URL }}
            classes={["RegistrationConfirmation-MLGLogo"]}
          />
          <h1 className="RegistrationConfirmation-Header">Подтверждение почты</h1>
          <p className="RegistrationConfirmation-Text">Ошибка на сервере</p>
          <p className="RegistrationConfirmation-Text">Пожалуйста, попробуйте в другой раз</p>
          <MLGLink
            link={{ isAnchor: true, linkContent: HOME_URL }}
            classes={["RegistrationConfirmation-Link", ""]}
          >
            Перейти на главную страницу
          </MLGLink>
        </div>
      </section>
    );
  }
  if (emailCode === null && codePassed) {
    return <Navigate to={LOGIN_URL} />;
  }
  return (
    <section className="RegistrationConfirmation">
      <div className="RegistrationConfirmation-Wrapper">
        <div className="RegistrationConfirmation-Flex1">
          <MLGLogo
            link={{ linkContent: HOME_URL }}
            classes={["RegistrationConfirmation-MLGLogo"]}
          />
          <h1 className="RegistrationConfirmation-Header">Подтверждение почты</h1>
          <p className="RegistrationConfirmation-Text">На вашу почту был выслан код</p>
          <p className="RegistrationConfirmation-Text">Введите его для подтверждения вашей почты</p>
        </div>
        <div className="RegistrationConfirmation-Flex2">
          <input
            className="RegistrationConfirmation-Input"
            placeholder="Введите код"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
          <InputCodeError value={inputCodeError} />
          <div className="RegistrationConfirmation-Btns">
            <MLGButton
              onClick={(evt) =>
                validateCode(evt, emailCode!, inputCode, setCodePassed, setInputCodeError)
              }
              btnType="submit"
              classes={["RegistrationConfirmation-Btn", ""]}
            >
              Подтвердить
            </MLGButton>
            <MLGButton
              onClick={() => setIsSuccess(false)}
              btnType="button"
              classes={["RegistrationConfirmation-Btn", "MLGButton_empty"]}
            >
              Отменить
            </MLGButton>
          </div>
        </div>
      </div>
    </section>
  );
};
