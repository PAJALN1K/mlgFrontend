import { AxiosError } from "axios";
import { FormEvent } from "react";

export async function handleLoginSubmit(
  evt: FormEvent,
  dispatchAuthLogin: () => void,
  setErrMsg: (msg: string) => void
) {
  evt.preventDefault();

  try {
    // FIXME IMMEDIATELY
    dispatchAuthLogin();
  } catch (e) {
    const err = e as AxiosError;
    if (!err?.response) {
      setErrMsg("Нет ответа от сервера");
    } else if (err.response?.status === 400) {
      setErrMsg("Отсутствует имя пользователя или пароль");
    } else if (err.response?.status === 401) {
      setErrMsg("Не авторизован");
    } else {
      setErrMsg("Вход в аккаунт окончился ошибкой");
    }
  }
}
