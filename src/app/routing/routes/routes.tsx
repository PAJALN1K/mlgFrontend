import React from "react";
import { RouteProps } from "react-router-dom";
// FIXME
// import { ProjectCreationPage } from "src/pages/authorized/ProjectCreationPage";
import { ProjectsPage } from "src/pages/authorized/ProjectsPage";
import { HomePage } from "src/pages/common/HomePage";
import { LoginPage } from "src/pages/unauthorized/LoginPage";
import { RegistrationPage } from "src/pages/unauthorized/RegistrationPage";
import {
  HOME_URL,
  REGISTRATION_URL,
  LOGIN_URL,
  PROJECTS_URL
  // PROJECT_CREATION_URL,
} from "src/shared/config/URLs";

export const commonRoutes: RouteProps[] = [{ path: HOME_URL, element: <HomePage /> }];

export const unauthorizedRoutes: RouteProps[] = [
  { path: REGISTRATION_URL, element: <RegistrationPage /> },
  { path: LOGIN_URL, element: <LoginPage /> }
];

export const authorizedRoutes: RouteProps[] = [
  { path: PROJECTS_URL, element: <ProjectsPage /> }
  // { path: PROJECT_CREATION_URL, element: <ProjectCreationPage /> }
];

export const publicRoutes: RouteProps[] = unauthorizedRoutes.concat(commonRoutes);

export const privateRoutes: RouteProps[] = authorizedRoutes.concat(commonRoutes);
