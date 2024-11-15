import React, { FC } from "react";
import { UserRegistrationType } from "src/entities/User";

interface IPasswordErr {
  user: UserRegistrationType;
}

export const PasswordErr: FC<IPasswordErr> = ({ user }) => {
  if (user.password.length < 8 || user.password.length > 24) {
    return <>Пожалуйста, введите пароль, содержащий от 8 до 24 символов</>;
  }
  return <>Пароль может состоять только из латиницы, цифр и нижних подчёркиваний</>;
};
