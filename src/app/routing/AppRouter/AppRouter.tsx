import React, { FC } from "react";
import { getIsUserAuth } from "src/entities/User";
import { useAppSelector } from "src/shared/lib/store";
import { AuthorizedRoutes } from "./AuthorizedRoutes";
import { UnauthorizedRoutes } from "./UnauthorizedRoutes";

export const AppRouter: FC = () => {
  const isAuth = useAppSelector(getIsUserAuth);

  if (isAuth) {
    return <AuthorizedRoutes />;
  }
  return <UnauthorizedRoutes />;
};
