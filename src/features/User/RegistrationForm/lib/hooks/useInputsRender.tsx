import { useEffect } from "react";
import { UserRegistrationType } from "src/entities/User";
import { RegistrationValuesChecker } from "../../model/types";
import { EMAIL_REGEX, PASSWORD_REGEX, USER_REGEX } from "../regexes";
import { useFirstRender } from "./useFirstRender";

export function useInputsRender(
  user: UserRegistrationType,
  isValueValid: RegistrationValuesChecker,
  setIsValueValid: (statement: RegistrationValuesChecker) => void
) {
  const isUsernameFR = useFirstRender();
  const isEmailFR = useFirstRender();
  const isPasswordFR = useFirstRender();
  // const isMatchPasswordFR = useFirstRender();

  useEffect(() => {
    if (isUsernameFR.current === 0) {
      isUsernameFR.current += 1;
    } else {
      const result = USER_REGEX.test(user.username);
      setIsValueValid({ ...isValueValid, username: result });
    }
  }, [user.username]);

  useEffect(() => {
    if (isEmailFR.current === 0) {
      isEmailFR.current = isUsernameFR.current + 1;
    } else {
      const result = EMAIL_REGEX.test(user.email);
      setIsValueValid({ ...isValueValid, email: result });
    }
  }, [user.email]);

  useEffect(() => {
    if (isPasswordFR.current === 0) {
      isPasswordFR.current += 1;
    } else {
      const result = PASSWORD_REGEX.test(user.password);
      setIsValueValid({ ...isValueValid, password: result });
    }
  }, [user.password]);

  // useEffect(() => {
  //   if (isPasswordFR) {
  //   } else {
  //     if (!isPasswordFR) {
  //       const result = PASSWORD_REGEX.test(password);
  //       setIsPasswordValid(result);
  //       const match = password === matchPassword;
  //       const resultM = result ? match : true;
  //       setIsMatchPasswordValid(resultM);
  //     }
  //   }
  // }, [password, matchPassword]);
}
