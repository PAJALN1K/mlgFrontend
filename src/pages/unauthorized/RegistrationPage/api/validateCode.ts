import { AxiosError } from "axios";
import { AuthApi } from "src/entities/User";
import { USER_LOCALSTORAGE_CONFIRMATION_CODE } from "src/shared/config";

export async function validateCode(
  evt: MouseEvent,
  emailCode: string,
  inputCode: string,
  setCodePassed: (codePassed: boolean) => void,
  setInputCodeError: (msg: string) => void
): Promise<void> {
  evt.preventDefault();

  if (emailCode === inputCode) {
    try {
      await AuthApi.createUser();
      setCodePassed(true);
      localStorage.removeItem(USER_LOCALSTORAGE_CONFIRMATION_CODE);
    } catch (e) {
      const err = e as AxiosError;
      if (!err?.response) {
        setInputCodeError("Нет ответа от сервера");
      } else {
        setInputCodeError("Регистрация окончилась ошибкой");
      }
    }
  } else {
    setInputCodeError("Неверный код");
  }
}
