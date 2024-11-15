import React, { FC } from "react";
import { useTitle } from "src/shared/lib/hooks/useTitle";
import { RegistrationPageMain } from "./RegistrationPageMain";

export const RegistrationPage: FC = () => {
  useTitle("Регистрация | MLG");

  return (
    <div className="MLGPage MLGPage_solo">
      <RegistrationPageMain />
    </div>
  );
};
