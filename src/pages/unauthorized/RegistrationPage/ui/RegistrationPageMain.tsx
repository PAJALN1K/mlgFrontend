import React, { useState } from "react";
import { Main } from "src/widgets/classicLayout/Main";
import { RegistrationConfirmation } from "./RegistrationConfirmation";
import { RegistrationSection } from "./RegistrationSection";

export const RegistrationPageMain = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <Main>
      {isSuccess ? (
        <RegistrationConfirmation setIsSuccess={setIsSuccess} />
      ) : (
        <RegistrationSection setIsSuccess={setIsSuccess} />
      )}
    </Main>
  );
};
