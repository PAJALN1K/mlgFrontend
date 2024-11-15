import React, { FC } from "react";
import { Main } from "src/widgets/classicLayout/Main";
import { useTitle } from "src/shared/lib/hooks/useTitle";
import { LoginSection } from "./LoginSection";

export const LoginPage: FC = () => {
  useTitle("Вход в аккаунт | MLG");

  return (
    <div className="MLGPage MLGPage_solo">
      <Main>
        <LoginSection />
      </Main>
    </div>
  );
};
