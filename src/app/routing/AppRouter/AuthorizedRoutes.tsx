import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PROJECTS_URL } from "src/shared/config/URLs";
import { privateRoutes, unauthorizedRoutes } from "../routes/routes";

// FIXME
export const AuthorizedRoutes: FC = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      {unauthorizedRoutes.map((route) => (
        <Route
          path={route.path}
          element={<Navigate to={PROJECTS_URL} replace />}
          key={route.path}
        />
      ))}
    </Routes>
  );
};
