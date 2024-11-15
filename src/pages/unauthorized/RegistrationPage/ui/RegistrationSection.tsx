import React, { FC } from "react";
import { RegistrationForm } from "src/features/User/RegistrationForm";
import { HOME_URL, LOGIN_URL } from "src/shared/config/URLs";
import { MLGLink } from "src/shared/ui/components/MLGLink";
import { MLGLogo } from "src/shared/ui/components/MLGLogo";

interface IRegistrationSection {
  setIsSuccess: (stmnt: boolean) => void;
}

export const RegistrationSection: FC<IRegistrationSection> = ({ setIsSuccess }) => {
  return (
    <section className="RegistrationSection">
      <div className="RegistrationSection-Wrapper">
        <MLGLogo link={{ linkContent: HOME_URL }} classes={["RegistrationSection-MLGLogo"]} />
        <RegistrationForm
          setIsSuccess={setIsSuccess}
          classes={["RegistrationSection-Form"]}
          buttonClasses={["RegistrationSection-Button"]}
        />
        <span className="RegistrationSection-LinkPretext">Уже есть аккаунт?</span>
        <MLGLink
          link={{ isAnchor: true, linkContent: LOGIN_URL }}
          classes={["MLGForm-Link", "RegistrationSection-Link", ""]}
        >
          Войти
        </MLGLink>
      </div>
    </section>
  );
};
