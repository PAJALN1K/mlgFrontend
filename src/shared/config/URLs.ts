export const SERVER_URL = process.env["REACT_APP_SERVER_URL"];

export const HOME_URL = "/";

export const REGISTRATION_URL = "/registration";
export const LOGIN_URL = "/login";

export const PROJECTS_URL = "/projects";
export const PROJECT_URL = "/projects/project_:id";
export const PROJECT_URL_FUNCTION: (name: string) => string = (project_name: string) =>
  `/projects/project_${project_name}`;
export const PROJECT_CREATION_URL = "/projects/create-project";

export const API_REGISTER = "/api/User/Register";
export const API_CONFIRM_CODE = "/api/User/ConfirmCode";
export const API_LOGIN = "/api/User/Login";

export const API_PROJECTS = "/api/Project";
export const API_PROJECT: (name: string) => string = (name: string) => `/api/Project/${name}`;
