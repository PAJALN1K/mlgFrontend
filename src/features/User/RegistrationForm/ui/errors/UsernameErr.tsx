import React, { FC } from "react";
import { UserRegistrationType } from "src/entities/User";

interface IUsernameErr {
  user: UserRegistrationType;
}

export const UsernameErr: FC<IUsernameErr> = ({ user }) => {
  if (user.username.length < 4 || user.username.length > 24) {
    if (!/^[\w-]*$/.test(user.username)) {
      return (
        <>Имя пользователя может состоять только из латиницы, цифр, нижних подчёркиваний и дефиса</>
      );
    }
    return <>Пожалуйста, введите имя пользователя, содержащее от 4 до 24 символов</>;
  }
  return (
    <>Имя пользователя может состоять только из латиницы, цифр, нижних подчёркиваний и дефиса</>
  );
};
