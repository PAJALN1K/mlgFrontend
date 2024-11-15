import React from "react";
import { getIsUserAuth } from "src/entities/User";
import {
  LOGIN_URL,
  PROJECT_CREATION_URL,
  PROJECTS_URL,
  REGISTRATION_URL
} from "src/shared/config/URLs";
import { useAppSelector } from "src/shared/lib/store";
import { MLGButtonLink } from "src/shared/ui/components/MLGButton";

export const JumbotronButtons = () => {
  const isAuth = useAppSelector(getIsUserAuth);

  return (
    <div className="Jumbotron-Buttons">
      {isAuth ? (
        <>
          <MLGButtonLink
            classes={["MLGButton_Jumbotron", "Jumbotron-Button", "MLGButton_default"]}
            link={{ linkContent: PROJECTS_URL, isAnchor: true }}
            btnType="button"
          >
            Все проекты
          </MLGButtonLink>
          <MLGButtonLink
            classes={["MLGButton_Jumbotron", "Jumbotron-Button", "MLGButton_empty"]}
            link={{ linkContent: PROJECT_CREATION_URL, isAnchor: false }}
            btnType="button"
          >
            Создать проект
          </MLGButtonLink>
        </>
      ) : (
        <>
          <MLGButtonLink
            classes={["MLGButton_Jumbotron", "Jumbotron-Button", "MLGButton_default"]}
            link={{ linkContent: REGISTRATION_URL, isAnchor: true }}
            btnType="button"
          >
            Регистрация
          </MLGButtonLink>
          <MLGButtonLink
            classes={["MLGButton_Jumbotron", "Jumbotron-Button", "MLGButton_empty"]}
            link={{ linkContent: LOGIN_URL, isAnchor: true }}
            btnType="button"
          >
            Вход в аккаунт
          </MLGButtonLink>
        </>
      )}
    </div>
  );
};
