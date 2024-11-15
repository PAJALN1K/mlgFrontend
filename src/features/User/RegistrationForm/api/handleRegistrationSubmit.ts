import { AxiosError } from "axios";
import { FormEvent } from "react";
import { AuthApi, UserRegistrationType } from "src/entities/User";
import { USER_LOCALSTORAGE_CONFIRMATION_CODE } from "src/shared/config";
import { USER_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from "../lib/regexes";

export async function handleRegistrationSubmit(
  evt: FormEvent,
  user: UserRegistrationType,
  setUser: (user: UserRegistrationType) => void,
  setErrMsg: (msg: string) => void,
  setIsSuccess: (stmnt: boolean) => void
): Promise<void> {
  evt.preventDefault();

  const v1 = USER_REGEX.test(user.username);
  const v2 = EMAIL_REGEX.test(user.email);
  const v3 = PASSWORD_REGEX.test(user.password);
  if (!v1 || !v2 || !v3) {
    setErrMsg("Invalid Entry");
    return;
  }

  try {
    const confirmationCode = await AuthApi.register(user);

    localStorage.setItem(USER_LOCALSTORAGE_CONFIRMATION_CODE, confirmationCode);
    setIsSuccess(true);
    setUser({
      username: "",
      email: "",
      password: ""
    });
  } catch (e) {
    const err = e as AxiosError;
    if (!err?.response) {
      setErrMsg("Нет ответа от сервера");
    } else if (err.response?.status === 409) {
      setErrMsg("Это имя пользователя уже занято");
    } else {
      setErrMsg("Регистрация окончилась ошибкой");
    }
  }
}
