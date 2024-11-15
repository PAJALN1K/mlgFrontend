import React, { FC } from "react";
import { LoginForm } from "src/features/User/LoginForm";
import { HOME_URL, REGISTRATION_URL } from "src/shared/config/URLs";
import { MLGLink } from "src/shared/ui/components/MLGLink";
import { MLGLogo } from "src/shared/ui/components/MLGLogo";

export const LoginSection: FC = () => {
  return (
    <section className="LoginSection">
      <div className="LoginSection-Wrapper">
        <MLGLogo link={{ linkContent: HOME_URL }} classes={["LoginSection-MLGLogo"]} />
        <LoginForm />
        <span className="LoginSection-LinkPretext">Нет аккаунта?</span>
        <MLGLink
          link={{ isAnchor: true, linkContent: REGISTRATION_URL }}
          classes={["MLGForm-Link", "LoginSection-Link", ""]}
        >
          Зарегистрироваться
        </MLGLink>
      </div>
    </section>
  );
};
