// FIXME?
export type UserRegistrationType = {
  username: string;
  email: string;
  password: string;
};

export type UserLoginType = {
  username: string;
  password: string;
};

export type UserType = {
  isAuth: boolean;
  username: string | null;
  email?: string | null;
};
