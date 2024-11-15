import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LOGIN_URL } from "src/shared/config/URLs";
import { publicRoutes, authorizedRoutes } from "../routes/routes";

export const UnauthorizedRoutes: FC = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      {authorizedRoutes.map((route) => (
        <Route path={route.path} element={<Navigate to={LOGIN_URL} replace />} key={route.path} />
      ))}
    </Routes>
  );
};
